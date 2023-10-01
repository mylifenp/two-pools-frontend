import { getClient } from "@lib/apollo/client";
import { Locale } from "@lib/i18n/i18n-config";
import { getDictionary } from "@lib/i18n/get-dictionary";
import { PROJECT } from "@typdef/queries";
import { Projects } from "@components/project/projects.component";
import { GetProjectsQuery } from "@generated/types";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
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
        <p>{dictionary["server-component"].welcome}</p>
      </div>
    </div>
  );
}
