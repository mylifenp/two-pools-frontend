import { getClient } from "@lib/apollo/client";
import { PROJECT } from "@typedef/queries";
import { Projects } from "@components/project/projects.component";
import { GetProjectsQuery } from "@generated/types";
import getIntl from "@app/intl";

export default async function Home() {
  const { formatMessage } = await getIntl();
  const {
    data: { projects },
    loading,
    error: project_error,
  } = await getClient().query<GetProjectsQuery>({
    query: PROJECT.GET_PROJECTS,
  });

  if (loading) return <p>Loading...</p>;
  if (project_error) return <p>Error :(</p>;
  return (
    <div className="page-bg min-h-screen">
      {/* <Skills dictionary={dictionary.counter} /> */}
      <Projects projects={projects} />
      <div>
        <p>{formatMessage({ id: "header" })}</p>
      </div>
    </div>
  );
}
