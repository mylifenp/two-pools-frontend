import { FC } from "react";
import { Info } from "@components/info.component";
import { getDictionary } from "@lib/i18n/get-dictionary";
import { Locale } from "@lib/i18n/i18n-config";

interface Props {
  params: { lang: Locale };
}

const Page: FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      Admin Page
      <div>
        <p>{dictionary["server-component"].welcome}</p>
      </div>
      <Info />
    </>
  );
};

export default Page;
