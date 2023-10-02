import "./globals.css";
import type { Metadata } from "next";
import { currentLocale } from "next-i18n-router";
import ServerIntlProvider from "@components/i18n/ServerIntlProvider";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@lib/auth/next-auth-providers";
import ApolloWrapper from "@lib/apollo/apollo-provider";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@lib/auth/auth";
import NavBar from "@components/layout/navbar";
import Footer from "@components/layout/footer";
import { ReactNode } from "react";
import getIntl from "./intl";

interface Props {
  children: ReactNode;
}
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "two-pools",
  description: "two-pools",
};

export default async function RootLayout({ children }: Props) {
  const { messages, locale } = await getIntl();
  const session = await getServerSession(AuthOptions);
  return (
    <html lang={currentLocale()} data-theme="light">
      <body className={inter.className}>
        <ServerIntlProvider messages={messages} locale={locale}>
          <NextAuthProvider>
            <ApolloWrapper session={session}>
              <NavBar />
              <div className="mx-5 px-3 py-1">{children}</div>
              <Footer />
            </ApolloWrapper>
          </NextAuthProvider>
        </ServerIntlProvider>
      </body>
    </html>
  );
}
