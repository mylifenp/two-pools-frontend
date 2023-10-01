"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@lib/i18n/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLocale = () => pathName.split("/")[1] ?? i18n.defaultLocale;

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {currentLocale()}
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
      >
        {i18n.locales
          .filter((locale) => locale !== currentLocale())
          .map((locale) => {
            return (
              <div key={locale} className="card-body my-1">
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
