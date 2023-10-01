"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../i18nConfig";
import { MouseEventHandler } from "react";

const languages = [
  { locale: "de", name: "Deutsch", flag: "🇩🇪" },
  { locale: "en", name: "English", flag: "🇬🇧" },
  { locale: "ja", name: "日本語", flag: "🇯🇵" },
];

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

  const getName = (locale: string) => {
    const language = languages.find((language) => language.locale === locale);
    if (!language) {
      return locale;
    }
    return (
      <div className="flex">
        <div className="px-1">{language.flag}</div>
        <div className="px-1">{language.name}</div>
      </div>
    );
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {currentLocale?.toUpperCase()}
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact p-2 w-32 shadow bg-primary text-primary-content"
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
                {getName(locale)}
              </button>
            );
          })}
      </div>
    </div>
  );
}
