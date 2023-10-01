"use client";
import { Skill as ISkill } from "@generated/types";
import { FC } from "react";
import { Skill } from "./skill.component";

interface Props {
  skills: Array<ISkill>;
}

export const Skills: FC<Props> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </>
  );
};
