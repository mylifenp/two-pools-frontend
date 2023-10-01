import getIntl from "@app/intl";
import ServerIntlProvider from "@components/i18n/ServerIntlProvider";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const intl = await getIntl();
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      {children}
    </ServerIntlProvider>
  );
}
