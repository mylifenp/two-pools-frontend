"use client";

import { FC } from "react";
import { GetCategoriesQueryVariables } from "@generated/types";
import { useIntl } from "react-intl";
import { Category } from "./category.component";
import { GetCategoriesQuery } from "@generated/types";
import { CATEGORY } from "@typedef/queries";
import { Error } from "@components/miscl";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

interface Props {}

export const Categories: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const {
    data: { categories },
    error,
  } = useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    CATEGORY.GET_CATEGORIES
  );
  if (error) return <Error error={formatMessage({ id: "error" })} />;
  return (
    <div className="flex-wrap flex">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
