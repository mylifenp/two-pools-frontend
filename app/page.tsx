import { getClient } from "@lib/apollo/client";
import { PROJECT } from "@typdef/queries";
import { Projects } from "@components/project/projects.component";
import { GetProjectsQuery } from "@generated/types";
import getIntl from "./intl";
import ServerIntlProvider from "@components/i18n/ServerIntlProvider";

export default async function Home() {
  const intl = await getIntl();
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
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div className="page-bg min-h-screen">
        {/* <Skills dictionary={dictionary.counter} /> */}
        <Projects projects={projects} />
        <div>
          <p>{intl.formatMessage({ id: "header" })}</p>
        </div>
      </div>
    </ServerIntlProvider>
  );
}
