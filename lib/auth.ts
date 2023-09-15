import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const { CLIENT_ID, CLIENT_SECRET, ISSUER } = process.env;

// const authServerUrl = "https://auth.nepdom.com/";
// const realm = "calculator";
// const clientId = "calculator_id";
// const clientSecret = "OdciyzJZkYdM4HeMaGdhP6juh71EivCf";

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
        // token.access_token = account.access_token;
        // token.id_token = account.id_token;
        token = {
          ...token,
          access_token: account.access_token,
          id_token: account.id_token,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      const { access_token, id_token } = token;
      return {
        ...session,
        access_token: access_token,
        id_token: id_token,
      };
    },
  },
};
