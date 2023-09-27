"use client";

import { HttpLink, ApolloLink, SuspenseCache } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { setContext } from "@apollo/client/link/context";

const { GQL_API_URL, GQL_ACCESS_TOKEN, GQL_ID_TOKEN } = process.env;

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${GQL_API_URL}`,
  });
  const authLink = setContext((_, { headers }) => {
    const access_token = `${GQL_ACCESS_TOKEN}`;
    const id_token = `${GQL_ID_TOKEN}`;
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
    link:
      typeof window === "undefined"
        ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), link])
        : link,
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      // makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
