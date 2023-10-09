import { getClient } from "@lib/apollo/client";
import { GetSkillsQuery } from "@generated/types";
import { SKILL } from "@typedef/queries";
import { Skills } from "@components/skill/skills.component";
import { AddSkill } from "@components/skill/skill.add.component";
import ErrorComp from "@components/errors/error";

export default async function SkillPage() {
  const {
    data: { skills },
    loading,
    error,
  } = await getClient().query<GetSkillsQuery>({
    query: SKILL.GET_SKILLS,
  });
  // if (loading) return <Spinner text={"loading"} />;
  if (error) return <ErrorComp error={error} />;
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
