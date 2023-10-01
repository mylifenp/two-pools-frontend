"use client";
import { Skill as ISkill, SkillInput } from "@generated/types";
import { FC, useState } from "react";
import { EditSkill } from "./skill.edit.component";

interface Props {
  skill: ISkill;
  dictionary: any;
}

export const Skill: FC<Props> = ({ skill, dictionary }) => {
  return (
    <div className="shadow-2xl m-6 p-3">
      <p>In Skills</p>
      <div>{skill.name}</div>
      <div>{skill.createdAt}</div>
      <EditSkill skill={skill} dictionary={dictionary} />
    </div>
  );
};
