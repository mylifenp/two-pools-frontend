import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@lib/next-auth-providers";
import ApolloWrapper from "@lib/apollo-provider";
import { i18n } from "@lib/i18n/i18n-config";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@lib/auth";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

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
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const session = await getServerSession(AuthOptions);
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextAuthProvider>
          <ApolloWrapper session={session}>{children}</ApolloWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}
