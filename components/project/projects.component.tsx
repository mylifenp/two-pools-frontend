"use client";
import { FC } from "react";
import { Project } from "../../generated/graphql";
import { graphql } from "../../generated";

interface Props {
  projects: Project[];
}

export const Projects: FC<Props> = ({ projects }) => {
  return (
    <>
      <p>projects</p>
      <p>{JSON.stringify(projects)}</p>
    </>
  );
};
