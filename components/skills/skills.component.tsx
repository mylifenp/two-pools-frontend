"use client";

import { FC } from "react";
import { GetSkillsQueryVariables } from "@generated/types";
import { useIntl } from "react-intl";
import { Skill } from "./skill.component";
import { GetSkillsQuery } from "@generated/types";
import { SKILL } from "@typedef/queries";
import { ErrorComp } from "@components/miscl";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

interface Props {}

export const Skills: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const {
    data: { skills },
    error,
  } = useSuspenseQuery<GetSkillsQuery, GetSkillsQueryVariables>(
    SKILL.GET_SKILLS
  );
  if (error) return <ErrorComp error={formatMessage({ id: "error" })} />;
  return (
    <div className="flex-wrap flex">
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
