import { FC } from "react";
import { Info } from "@components/info.component";
import getIntl from "@app/intl";

interface Props {}

const Page: FC<Props> = async () => {
  const intl = await getIntl();
  return (
    <>
      Admin Page
      <div>
        <p>{intl.formatMessage({ id: "page2" })}</p>
      </div>
      <Info />
    </>
  );
};

export default Page;
