// import { Projects } from "@components/project/projects.component";
import { User } from "../components/user.component";
import Image from "next/image";
import { gql } from "@apollo/client";
import { Projects } from "@components/project/projects.component";
import { Project, ProjectsQuery } from "../generated/graphql";
import { getClient } from "@lib/client";
import { Skills } from "@components/skill/skills.component";
// import { getServerSession } from "next-auth";
// import { AuthOptions } from "@lib/auth";

const GET_PROJECTS = gql`
  query Projects {
    projects {
      id
      title
    }
  }
`;

export default async function Home() {
  const {
    data: { projects },
    loading,
    error,
  } = await getClient().query<ProjectsQuery>({
    query: GET_PROJECTS,
  });
  // const data = await getServerSession(AuthOptions);
  // console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="page-bg min-h-screen">
      <Projects projects={projects} />

      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <User />
        </div>
      </div>
      <Skills />
    </div>
  );
}
