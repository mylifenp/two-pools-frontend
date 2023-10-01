// import { NextResponse, type NextRequest } from "next/server";
// import { i18n } from "./lib/i18n/i18n-config";
import { isAdmin } from "@lib/auth/org_roles";
import { OrgRoles } from "next-auth";
import { withAuth } from "next-auth/middleware";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";

// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales;

//   // Use negotiator and intl-localematcher to get best locale
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   );

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);

//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
//   // // If you have one
//   // if (
//   //   [
//   //     '/manifest.json',
//   //     '/favicon.ico',
//   //     // Your other files in `public`
//   //   ].includes(pathname)
//   // )
//   //   return

//   // Check if there is any supported locale in the pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url
//       )
//     );
//   }
// }

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export default withAuth(
  // function middleware(req) {
  //   console.log(req.nextauth.token);
  // },
  {
    callbacks: {
      authorized({ req, token }) {
        console.log(req.nextUrl.pathname);
        if (req.nextUrl.pathname === "/admin") {
          if (!token || !("user" in token)) return false;
          const {
            user: { org_roles },
          } = token as { user: { org_roles: OrgRoles } };
          if (!org_roles) return false;
          return isAdmin(org_roles);
        }
        return !!token;
      },
    },
  }
);

export const config = {
  // Matcher ignoring `/_next/`, `/static` and `/api/`
  matcher: [
    "/((?!api|static|_next/static|_next/image|favicon.ico).*)",
    "/admin",
  ],
};
