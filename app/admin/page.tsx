import { FC } from "react";
import { Info } from "@components/info.component";
import getIntl from "@app/intl";

interface Props {}

const Page: FC<Props> = async () => {
  const { formatMessage } = await getIntl("admin");
  return (
    <>
      <h1>{formatMessage({ id: "header.title" })}</h1>
      <div>
        <p>{formatMessage({ id: "header.subtitle.tags" })}</p>
      </div>
      <Info />
    </>
  );
};

export default Page;
