"use client";

import { IntlProvider, MessageFormatElement } from "react-intl";
import { ReactNode } from "react";

interface Props {
  messages: Record<string, MessageFormatElement[]> | Record<string, string>;
  locale: string;
  children: ReactNode;
}

export default function ServerIntlProvider({
  messages,
  locale,
  children,
}: Props) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
