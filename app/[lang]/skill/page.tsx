import { Locale } from "@lib/i18n/i18n-config";
import { getDictionary } from "@lib/i18n/get-dictionary";
import { getClient } from "@lib/apollo/client";
import { GetSkillsQuery } from "@generated/types";
import { SKILL } from "@typdef/queries";
import { Error, Spinner } from "@components/miscl";
import { Skills } from "@components/skill/skills.component";

export default async function SkillPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const {
    data: { skills },
    loading,
    error,
  } = await getClient().query<GetSkillsQuery>({
    query: SKILL.GET_SKILLS,
  });
  if (loading) return <Spinner text={dictionary["miscl"].loading} />;
  if (error) return <Error error={dictionary["miscl"].error} />;
  return (
    <div className="page-bg min-h-screen">
      <div>
        <p>{dictionary["server-component"].welcome}</p>
      </div>
      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Skills dictionary={dictionary} skills={skills} />
          {/*  */}
        </div>
      </div>
    </div>
  );
}
