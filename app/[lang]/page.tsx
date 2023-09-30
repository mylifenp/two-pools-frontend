import { User } from "@components/user.component";
import { getClient } from "@lib/client";
import { Skills } from "@components/skill/skills.component";
import { Locale } from "@lib/i18n/i18n-config";
import { getDictionary } from "@lib/i18n/get-dictionary";
import LocaleSwitcher from "@components/i18n/local-switcher";
import { PROJECT } from "@typdef/queries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  // const {
  //   data: { projects },
  //   loading,
  //   error: project_error,
  // } = await getClient().query({
  //   query: GET_PROJECTS,
  // });
  const {
    data: { projects },
    loading,
    error: project_error,
  } = await getClient().query({
    query: PROJECT.GET_PROJECTS,
  });

  // const {
  //   data: { skills },
  //   error: skill_error,
  // } = await getClient().query({
  //   query: queries.GET_SKILLS,
  // });

  // console.log("skill_error", skill_error);

  if (loading) return <p>Loading...</p>;
  if (project_error) return <p>Error :(</p>;
  return (
    <div className="page-bg min-h-screen">
      <LocaleSwitcher />
      {JSON.stringify(projects)}
      {/* <Skills dictionary={dictionary.counter} /> */}
      {/* <Projects projects={projects} /> */}
      <div>
        <p>{dictionary["server-component"].welcome}</p>
      </div>
      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <User />
        </div>
      </div>
    </div>
  );
}
