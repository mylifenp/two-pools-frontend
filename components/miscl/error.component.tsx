import { FC } from "react";
import { useIntl } from "react-intl";

interface Props {
  error: string;
}

const ErrorComp: FC<Props> = ({ error }) => {
  const { formatMessage } = useIntl();
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">{error}</p>
      <p>{formatMessage({ id: "errors.basic.subtitle" })}</p>
    </div>
  );
};

export default ErrorComp;
