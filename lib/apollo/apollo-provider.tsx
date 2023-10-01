"use client";
import { ApolloLink, HttpLink, split } from "@apollo/client";

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { createClient } from "graphql-ws";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { Session } from "next-auth";
import { ReactNode, useMemo } from "react";
import env_config from "../../config";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

interface Props {
  session?: Session | null;
  children: ReactNode;
}

const { GQL_API_URL, GQL_WS_URL } = env_config;

const ApolloWrapper = ({ session, children }: Props) => {
  const { access_token, id_token } = session ?? {
    access_token: "",
    id_token: "",
  };
  const httpLink = new HttpLink({
    uri: GQL_API_URL,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: GQL_WS_URL,
      connectionParams: async () => {
        return { access_token, id_token };
      },
    })
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
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

  const makeClient = () => {
    const authLink = setContext(async (operation, { headers }) => {
      return {
        headers: {
          ...headers,
          access_token,
          id_token,
        },
      };
    });

    return new NextSSRApolloClient({
      name: "web-ssr",
      version: "1.2",
      link: ApolloLink.from([
        authLink,
        errorLink,
        splitLink,
        // new RetryLink(),
        // typeof window === "undefined"
        //   ? ApolloLink.from([
        //       new SSRMultipartLink({
        //         stripDefer: false,
        //         cutoffDelay: 200,
        //       }),
        //       authLink,
        //       splitLink,
        //     ])
        //   : splitLink,
      ]),
      cache: new NextSSRInMemoryCache(),
      //connectToDevTools: devTools,
    });
  };

  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloWrapper;
