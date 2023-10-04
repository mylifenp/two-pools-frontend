import { FC } from "react";

interface Props {
  date: string | undefined;
}

const DateParser: FC<Props> = ({ date }) => {
  if (!date) return <p className="text-sm">invalid date</p>;
  const _date = new Date(date);
  if (isNaN(_date.valueOf())) return <p className="text-sm">invalid date</p>;
  return <p className="text-sm">{_date.toLocaleDateString()}</p>;
};

export default DateParser;
