import { isAdmin } from "@lib/auth/org_roles";
import { OrgRoles } from "next-auth";
import { withAuth } from "next-auth/middleware";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized({ req, token }) {
        console.log(req.nextUrl.pathname);
        // if (req.nextUrl.pathname === "/admin") {
        //   if (!token || !("user" in token)) return false;
        //   const {
        //     user: { org_roles },
        //   } = token as { user: { org_roles: OrgRoles } };
        //   if (!org_roles) return false;
        //   // return isAdmin(org_roles);
        //   return false;
        // }
        // console.log("token in withAuth", token);
        // return !!token;
        return false;
      },
    },
  }
);

export const config = {
  // Matcher ignoring `/_next/`, `/static` and `/api/`
  matcher: [
    "/admin",
    "/((?!api|static|_next/static|_next/image|favicon.ico).*)",
  ],
};
