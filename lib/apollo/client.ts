import { HttpLink, from, split } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { getSession } from "next-auth/react";
import env_config from "../../config";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../auth/auth";
import { onError } from "@apollo/client/link/error";

const { GQL_API_URL, GQL_WS_URL } = env_config;

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({ uri: GQL_API_URL });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: GQL_WS_URL,
      connectionParams: async () => {
        const session = await getSession();
        if (!session) return {};
        const { access_token, id_token } = session;
        return { access_token, id_token };
      },
    })
  );
  const authLink = setContext(async (_, { headers }) => {
    const session = await getServerSession(AuthOptions);
    const { access_token, id_token } = session ?? {
      access_token: "",
      id_token: "",
    };
    return {
      headers: {
        ...headers,
        access_token,
        id_token,
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.error("[Network error]:", networkError);
    }
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: from([errorLink, splitLink]),
  });
});
