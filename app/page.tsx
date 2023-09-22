// import { Projects } from "@components/project/projects.component";
import { User } from "../components/user.component";
import Image from "next/image";
import { graphqlClient } from "@lib/graphql-client";
import { Projects } from "@components/project/projects.component";
import { graphql } from "../generated";
import { Project, ProjectsQuery } from "../generated/graphql";

interface Data {
  projects: Project[];
}

const GET_PROJECTS = graphql(/* GraphQL */ `
  query Projects {
    projects {
      id
      title
    }
  }
`);

export default async function Home() {
  const { projects } = await graphqlClient.request<Data>(GET_PROJECTS);
  return (
    <div className="page-bg min-h-screen">
      <Projects projects={projects} />

      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <User />
        </div>
      </div>
    </div>
  );
}
