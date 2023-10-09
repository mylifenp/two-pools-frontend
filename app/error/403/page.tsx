import getIntl from "@app/intl";
import Link from "next/link";

const Custom403 = async () => {
  const { formatMessage } = await getIntl("error");
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="my-4 text-center">
            <h1 className="text-2xl">
              403 - {formatMessage({ id: "errors.forbidden.title" })}
            </h1>
            <p className="">
              {formatMessage({ id: "errors.forbidden.subtitle" })}
            </p>
          </div>
          <Link className="btn btn-primary" href="/">
            {formatMessage({ id: "errors.forbidden.home" })}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom403;
