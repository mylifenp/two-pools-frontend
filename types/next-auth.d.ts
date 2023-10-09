import NextAuth from "next-auth";
import { type JWT as DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT extends DefaultJWT {
    user?: User;
  }
  interface User {
    id?: string;
    name?: string;
    email?: string;
    org_roles?: OrgRoles;
    image: string | null;
  }
  interface Session {
    access_token?: string;
    id_token?: string;
    error: string | null;
    user: User;
    // id_token?: string;
    // access_token?: string;
    // } & DefaultSession["user"];
  }
  interface Profile {
    org_roles?: OrgRoles;
  }
  interface Roles {
    roles: string[];
    name: string;
  }
  interface OrgRoles {
    [key: string]: Roles;
  }
}
