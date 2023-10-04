"use client";
import { CategoryInput, useAddCategoryMutation } from "@generated/types";
import { CATEGORY } from "@typedef/queries";
import {
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useIntl } from "react-intl";
import { CategoryForm } from "./category.edit.component";
import { ErrorComp, Spinner } from "@components/miscl";

interface Props {}

export const AddCategory: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const [input, setInput] = useState<CategoryInput | null>(null);
  const [addCategoryFn, { loading, error }] = useAddCategoryMutation();

  const handleAddCategory = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInput({ name: "" });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!input || !input.name) return;
    addCategoryFn({
      variables: { input },
      update: (cache, { data }) => {
        if (!data?.addCategory) return;
        cache.modify({
          fields: {
            categories(existingCategories = []) {
              const newCategoryRef = cache.writeQuery({
                data: data.addCategory,
                query: CATEGORY.GET_CATEGORY,
              });
              return [...existingCategories, newCategoryRef];
            },
          },
        });
      },
      onCompleted: () => setInput(null),
    });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput({ name: value });
  };

  const handleCancel = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInput(null);
  };

  if (loading) {
    return <Spinner text={formatMessage({ id: "loading" })} />;
  }
  if (error) {
    return <ErrorComp error={formatMessage({ id: "error" })} />;
  }

  return (
    <div>
      <div className="flex justify-start">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddCategory}
        >
          {formatMessage({ id: "add_category" })}
        </button>
      </div>
      {input && (
        <CategoryForm
          input={input}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};
