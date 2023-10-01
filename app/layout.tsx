import "./globals.css";
import type { Metadata } from "next";
import { currentLocale } from "next-i18n-router";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@lib/auth/next-auth-providers";
import ApolloWrapper from "@lib/apollo/apollo-provider";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@lib/auth/auth";
import NavBar from "@components/layout/navbar";

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "two-pools",
  description: "two-pools",
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
    <html lang={currentLocale()} data-theme="light">
      <body className={inter.className}>
        <NextAuthProvider>
          <ApolloWrapper session={session}>
            <div>
              <NavBar />
              {children}
            </div>
          </ApolloWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}
