"use client";
import { Skill as ISkill } from "@generated/types";
import { FC } from "react";
import { Skill } from "./skill.component";

interface Props {
  dictionary: any;
  skills: Array<ISkill>;
}

export const Skills: FC<Props> = ({ dictionary, skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} dictionary={dictionary.miscl} />
      ))}
    </>
  );
};
