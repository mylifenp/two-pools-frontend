import getIntl from "@app/intl";
import Link from "next/link";

const ErrorPage = async () => {
  const { formatMessage } = await getIntl("error");
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="my-4 text-center">
            <h1 className="text-2xl">
              400 - {formatMessage({ id: "errors.bad_request.title" })}
            </h1>
            <p className="">
              {formatMessage({ id: "errors.bad_request.subtitle" })}
            </p>
          </div>
          <Link className="btn btn-primary" href="/">
            {formatMessage({ id: "errors.bad_request.home" })}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
