import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "../lib/next-auth-providers";
import { ApolloWrapper } from "../lib/apollo-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Phase Two Keycloak + NextJs Example",
  description: "Phase Two Keycloak + NextJs Example",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}
