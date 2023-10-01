"use client";
import { GetProjectsQuery } from "@generated/types";
import { FC } from "react";
import Project from "./project.component";

interface Props {
  projects: GetProjectsQuery["projects"];
}

export const Projects: FC<Props> = ({ projects }) => {
  return projects.map((project) => (
    <Project key={project.id} project={project} />
  ));
};
