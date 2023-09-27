import { HttpLink, from } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";

const { GQL_API_URL, GQL_ACCESS_TOKEN, GQL_ID_TOKEN } = process.env;

export const { getClient } = registerApolloClient(() => {
  const access_token = `${GQL_ACCESS_TOKEN}`;
  const id_token = `${GQL_ID_TOKEN}`;
  // console.log("access_token", access_token);
  // const errorLink = onError(({ graphQLErrors, networkError }) => {
  //   if (graphQLErrors)
  //     graphQLErrors.forEach(({ message, locations, path }) =>
  //       console.log(
  //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
  //       )
  //     );
  //   if (networkError) console.log(`[Network error]: ${networkError}`);
  // });
  const httpLink = new HttpLink({ uri: `${GQL_API_URL}` });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        access_token: access_token ?? "",
        id_token: id_token ?? "",
      },
    };
  });
  const link = authLink.concat(httpLink);
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link,
  });
});
