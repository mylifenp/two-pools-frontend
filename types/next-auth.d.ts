import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string | undefined;
    id_token: string | undefined;
    user: {
      /** The user's name. */
      name: string;
      email: string;
    };
  }
}
