"use client";
import { FC } from "react";
import { useIntl } from "react-intl";

interface Props {
  date: string | undefined;
}

const DateParser: FC<Props> = ({ date }) => {
  const { formatMessage } = useIntl();
  if (!date)
    return <p className="text-sm">{formatMessage({ id: "invalid.date" })}</p>;
  const _date = new Date(date);
  if (isNaN(_date.valueOf()))
    return <p className="text-sm">{formatMessage({ id: "invalid.date" })}</p>;
  return <p className="text-sm">{_date.toLocaleDateString()}</p>;
};

export default DateParser;
