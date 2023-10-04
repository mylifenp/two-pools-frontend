"use client";
import { SkillInput, useAddSkillMutation } from "@generated/types";
import { SKILL } from "@typedef/queries";
import { FC, FormEvent, FormEventHandler, useState } from "react";
import { useIntl } from "react-intl";

interface Props {}

export const AddSkill: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const [skill, setSkill] = useState<SkillInput | null>(null);
  const [addSkillFn, { loading, error }] = useAddSkillMutation();

  const handleAddSkill = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSkill({ name: "" });
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setSkill({ name: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!skill || !skill.name) return;
    addSkillFn({
      variables: { input: { ...skill } },
      update(cache, { data }) {
        if (!data || !data.addSkill) return;
        cache.modify({
          fields: {
            skills(existingSkills = []) {
              const newSkillRef = cache.writeQuery({
                data: data.addSkill,
                query: SKILL.GET_SKILL,
              });
              return [...existingSkills, newSkillRef];
            },
          },
        });
      },
      onCompleted: () => setSkill(null),
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!skill) {
    return (
      <div>
        <button
          type="button"
          onClick={handleAddSkill}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {formatMessage({ id: "addSkill" })}
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="skill-name">{formatMessage({ id: "skill_name" })}</label>
      <input
        type="text"
        name="name"
        id="skill-name"
        placeholder="Enter skill name"
        aria-label="Skill Name"
        disabled={loading}
        onChange={handleChange}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
