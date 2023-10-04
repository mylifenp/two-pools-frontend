"server-only";

import i18nConfig from "../i18nConfig";
import { createIntl } from "@formatjs/intl";
import { flattenMessages } from "@lib/i18n/flatten";
import { currentLocale } from "next-i18n-router";
import { MessageFormatElement } from "react-intl";

const getMessages = async (
  lang: string,
  namespace: string
): Promise<Record<string, MessageFormatElement[]> | Record<string, string>> => {
  const messages = (await import(`../locales/${lang}/${namespace}.json`))
    .default;
  return flattenMessages(messages);
};

export default async function getIntl(namespace: string = "default") {
  const lang = currentLocale() || i18nConfig.defaultLocale;

  return createIntl({
    locale: lang,
    messages: await getMessages(lang, namespace),
    fallbackOnEmptyString: true,
    onError: (err) => {
      if (err.code === "MISSING_TRANSLATION") {
        // console.error(`Missing translation: ${err.message}`);
        // console.error("err");
      }
      // console.log(err);
    },
  });
}
