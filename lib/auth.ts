import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
import env_config from "../config";

const { CLIENT_ID, CLIENT_SECRET, ISSUER } = env_config;

const scope = "email profile openid";

async function refreshTokens(token: JWT) {
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
    const { access_token, id_token, refresh_token, expires_in } = tokens;
    return {
      ...token,
      access_token,
      id_token,
      refresh_token,
      expires_at: Math.floor(Date.now() / 1000 + expires_in),
    };
  } catch (err) {
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

export const AuthOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET as string,
      issuer: ISSUER,
      authorization: {
        params: {
          scope,
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile }) {
      // console.log("user, profile", user, profile);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        const { access_token, id_token, refresh_token, expires_at } = account;
        if (profile) {
          const { org_roles, image } = profile;
          user = { ...user, org_roles, image: !image ? null : image };
        }
        return {
          ...token,
          access_token,
          id_token,
          refresh_token,
          expires_at,
          user,
        };
      }
      if (
        "expires_at" in token &&
        Date.now() < (token.expires_at as number) * 1000
      ) {
        return token;
      } else {
        return refreshTokens(token);
      }
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const {
        access_token,
        id_token,
        refresh_token,
        expires_at,
        error,
        user: token_user,
      } = token;
      const { org_roles, image, id }: any = token_user;
      return {
        ...session,
        access_token,
        id_token,
        refresh_token,
        expires_at,
        error: error ?? null,
        user: {
          ...session.user,
          org_roles,
          image: !image ? null : image,
          id: !id ? null : id,
        },
      };
    },
  },
} satisfies NextAuthOptions;

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, AuthOptions);
}
