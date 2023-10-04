import { Skill as ISkill } from "@generated/types";
import { FC } from "react";
import { EditSkill } from "./skill.edit.component";

interface Props {
  skill: ISkill;
}

export const Skill: FC<Props> = ({ skill }) => {
  return (
    <div className="shadow-2xl m-2 p-2 w-46">
      <p>In Skills</p>
      <div>{skill.name}</div>
      <div>{skill.createdAt}</div>
      <EditSkill skill={skill} />
    </div>
  );
};
