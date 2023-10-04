"use client";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Categories } from "./categories.component";
import { AddCategory } from "./category.add.component";

interface Props {}

const CategoryComponent: FC<Props> = () => {
  const { status } = useSession();
  const { formatMessage } = useIntl();
  return (
    <div className="flex-grow">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input title="categories" type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          <h2>{formatMessage({ id: "categories" })}</h2>
        </div>
        <div className="collapse-content">
          <div>
            <AddCategory />
          </div>
          <div className="overflow-x-auto">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
