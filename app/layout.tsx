import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider as AuthProvider } from "./providers";
// import { graphql } from "../gql";
// import { graphqlClient } from "../lib/graphql-client";

const inter = Inter({ subsets: ["latin"] });
// const testDoc = graphql(/* GraphQL */ `
//   query test {
//     test {
//       name
//       email
//     }
//   }
// `);

export const metadata: Metadata = {
  title: "Phase Two Keycloak + NextJs Example",
  description: "Phase Two Keycloak + NextJs Example",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { test } = await graphqlClient.request(testDoc);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        {/* <p>{JSON.stringify(test)}</p> */}
      </body>
    </html>
  );
}
