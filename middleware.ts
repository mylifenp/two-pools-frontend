import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { isAuthenticated, isAdmin } from "@lib/auth/auth-checkers";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    return i18nRouter(req, i18nConfig);
  },
  {
    callbacks: {
      authorized({ req, token }) {
        const _admin = req.nextUrl.pathname.startsWith("/admin");
        const _protected = req.nextUrl.pathname.startsWith("/protected");
        if (!_protected && !_admin) {
          return true;
        }
        if (_protected) {
          return isAuthenticated(token);
        }
        if (_admin) {
          return isAdmin(token);
        }

        return false;
      },
    },
  }
);

export const config = {
  // Matcher ignoring `/_next/`, `/static` and `/api/`
  matcher: [
    "/protected/:path*",
    "/admin/:path*",
    "/((?!api|static|_next/static|_next/image|favicon.ico).*)",
  ],
};
