import { Category as ICategory } from "@generated/types";
import { FC } from "react";
import { EditCategory } from "./category.edit.component";
import DateParser from "@components/miscl/date-parser";

interface Props {
  category: ICategory;
}

export const Category: FC<Props> = ({ category }) => {
  return (
    <div className="shadow-2xl m-2 p-2 w-46">
      <div>{category.name}</div>
      <div className="flex">
        <div className="text-sm">
          <DateParser date={category.createdAt} />
        </div>
        <div className="text-sm">
          <DateParser date={category.updatedAt} />
        </div>
      </div>

      <EditCategory category={category} />
    </div>
  );
};
