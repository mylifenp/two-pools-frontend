import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const { CLIENT_ID, CLIENT_SECRET, ISSUER } = process.env;

const scope = "email profile openid";

export const AuthOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: `${CLIENT_ID}`,
      clientSecret: `${CLIENT_SECRET}`,
      issuer: `${ISSUER}`,
      authorization: {
        params: {
          scope: `${scope}`,
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        return {
          ...token,
          access_token: account.access_token,
          id_token: account.id_token,
          refresh_token: account.refresh_token,
          expires_at: account.expires_at,
        };
      }
      if (
        "expires_at" in token &&
        Date.now() < (token.expires_at as number) * 1000
      ) {
        return token;
      } else {
        try {
          const endpoint = `${ISSUER}/protocol/openid-connect/token`;
          const response = await fetch(endpoint, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              grant_type: "refresh_token",
              client_id: `${CLIENT_ID}`,
              client_secret: `${CLIENT_SECRET}`,
              refresh_token: `${token.refresh_token}`,
            }),
            method: "POST",
          });
          const tokens = await response.json();
          if (!response.ok) {
            throw new Error(tokens.error_description ?? "Unknown error");
          }
          return {
            ...token,
            access_token: tokens.access_token,
            id_token: tokens.id_token,
            refresh_token: tokens.refresh_token,
            expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
          };
        } catch (err) {
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      const { access_token, id_token, refresh_token, expires_at, error } =
        token;
      return {
        ...session,
        access_token: access_token,
        id_token: id_token,
        refresh_token: refresh_token,
        expires_at: expires_at,
        error,
      };
    },
  },
};
