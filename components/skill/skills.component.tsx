"use client";
import {
  useQuery,
  useSuspenseQuery,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { FC } from "react";
import { GET_SKILLS } from "@typdef/queries";
import { useSession } from "next-auth/react";

interface Props {
  dictionary: { increment: string; decrement: string };
}

// export const Skills: FC<Props> = ({ dictionary }) => {
//   const { data: session, status } = useSession();
//   if (status === "authenticated") {
//     return <SkillsList dictionary={dictionary} />;
//   }
//   return null;
// };

export const Skills: FC<Props> = ({ dictionary }) => {
  const { data, error, loading } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>In Skills</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
