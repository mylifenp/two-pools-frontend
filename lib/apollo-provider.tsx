// "use client";

// import { HttpLink, ApolloLink } from "@apollo/client";
// import {
//   NextSSRApolloClient,
//   ApolloNextAppProvider,
//   NextSSRInMemoryCache,
//   SSRMultipartLink,
// } from "@apollo/experimental-nextjs-app-support/ssr";
// import { setContext } from "@apollo/client/link/context";
// import { useSession } from "next-auth/react";
// import { setVerbosity } from "ts-invariant";
// import { Session } from "next-auth";
// import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
// import { onError } from "@apollo/client/link/error";
// import { RetryLink } from "@apollo/client/link/retry";

// interface Props {
//   token?: Session | null;
//   children: ReactNode;
// }

// const { GQL_API_URL } = process.env;
// // setVerbosity("debug");

// const makeClient = () => {
//   const httpLink = new HttpLink({
//     uri: GQL_API_URL,
//   });
//   const authLink = setContext((_, { headers }) => {
//     // console.log("session in setContext", session);
//     const session = { access_token: "", id_token: "" };
//     const access_token = session?.access_token ?? "";
//     const id_token = session?.id_token ?? "";
//     return {
//       headers: {
//         ...headers,
//         access_token,
//         id_token,
//       },
//     };
//   });

//   const link = authLink.concat(httpLink);

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), link])
//         : link,
//   });
// };

// // function makeClient(session: Session | null) {
// //   const httpLink = new HttpLink({
// //     uri: GQL_API_URL,
// //   });
// //   const authLink = setContext(async (_, { headers }) => {
// //     console.log("session in setContext", session);
// //     const access_token = session?.access_token ?? "";
// //     const id_token = session?.id_token ?? "";
// //     return {
// //       headers: {
// //         ...headers,
// //         access_token,
// //         id_token,
// //       },
// //     };
// //   });

// //   const link = authLink.concat(httpLink);

// //   return new NextSSRApolloClient({
// //     cache: new NextSSRInMemoryCache(),
// //     link:
// //       typeof window === "undefined"
// //         ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), link])
// //         : link,
// //   });
// // }

// // export function ApolloWrapper({ children }: React.PropsWithChildren) {
// //   return (
// //     <ApolloNextAppProvider makeClient={makeClient}>
// //       {children}
// //     </ApolloNextAppProvider>
// //   );
// // }

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
import env_config from "../config";
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

  // const authLink = new ApolloLink((operation, forward) => {
  //   try {
  //     operation.setContext(({ headers }: any) => ({
  //       headers: {
  //         ...headers,
  //         access_token,
  //         id_token,
  //       },
  //     }));
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return forward(operation);
  // });

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

  // const authHttpLink = ApolloLink.from([
  //   onError(({ graphQLErrors, networkError }) => {
  //     if (graphQLErrors) {
  //       graphQLErrors.forEach(({ message, locations, path }) =>
  //         console.error(
  //           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
  //         )
  //       );
  //     }
  //     if (networkError) {
  //       console.error("[Network error]:", networkError);
  //     }
  //   }),
  //   authLink,
  //   splitLink,
  //   new RetryLink(),
  //   typeof window === "undefined"
  //     ? ApolloLink.from([
  //         new SSRMultipartLink({
  //           stripDefer: false,
  //           cutoffDelay: 200,
  //         }),
  //         httpLink,
  //       ])
  //     : httpLink,
  // ]);

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
