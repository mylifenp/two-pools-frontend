// "use client";
// import { useCurrentLocale } from "next-i18n-router/client";
// import i18nConfig from "../../i18nConfig";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";

// export default function LocaleSwitcher() {
//   const pathName = usePathname();
//   const _locale = useCurrentLocale(i18nConfig);
//   const [lang, setLang] = useState<string>(
//     pathName.split("/")[1] ?? i18n.defaultLocale
//   );

//   const redirectedPathName = (locale: string) => {
//     if (!pathName) return "/";
//     const segments = pathName.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   console.log("_locale", _locale);

//   return (
//     <div className="dropdown dropdown-bottom dropdown-end">
//       <label tabIndex={0} className="btn btn-ghost btn-circle">
//         {lang.toUpperCase()}
//       </label>
//       <div
//         tabIndex={0}
//         className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
//       >
//         {i18n.locales
//           .filter((locale) => locale !== lang)
//           .map((locale) => {
//             return (
//               <div key={locale} className="card-body my-1">
//                 {/* <Link href={redirectedPathName(locale)}>{locale}</Link> */}
//                 <Link
//                   href={redirectedPathName(locale)}
//                   onClick={() => setLang(locale)}
//                 >
//                   {locale}
//                 </Link>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../i18nConfig";
import { MouseEventHandler } from "react";

export default function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newLocale = e.currentTarget.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {currentLocale?.toUpperCase()}
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
      >
        {i18nConfig.locales
          .filter((locale) => locale !== currentLocale)
          .map((locale) => {
            return (
              <button
                key={locale}
                className="card-body my-1"
                value={locale}
                onClick={handleChange}
              >
                {locale}
              </button>
            );
          })}
      </div>
    </div>
  );
}
