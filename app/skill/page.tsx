import { getClient } from "@lib/apollo/client";
import { GetSkillsQuery } from "@generated/types";
import { SKILL } from "@typdef/queries";
import { Error, Spinner } from "@components/miscl";
import { Skills } from "@components/skill/skills.component";
import getIntl from "@app/intl";
import { AddSkill } from "@components/skill/skill.add.component";

export default async function SkillPage() {
  const intl = await getIntl();
  const {
    data: { skills },
    loading,
    error,
  } = await getClient().query<GetSkillsQuery>({
    query: SKILL.GET_SKILLS,
  });
  if (loading) return <Spinner text={intl.formatMessage({ id: "loading" })} />;
  if (error) return <Error error={intl.formatMessage({ id: "error" })} />;
  return (
    <div className="page-bg min-h-screen">
      <div className="py-12">
        <AddSkill />
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
}
