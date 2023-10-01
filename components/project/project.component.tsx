import React, { FC } from "react";
import { GetProjectsQuery } from "@generated/types";

interface Props {
  project: GetProjectsQuery["projects"][0] | undefined;
}

const Project: FC<Props> = ({ project }) => {
  if (!project) return null;

  return (
    <div>
      <h1>{project.id}</h1>
      <p>{project.title}</p>
    </div>
  );
};

export default Project;
