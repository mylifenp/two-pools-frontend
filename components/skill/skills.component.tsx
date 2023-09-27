"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import { Skill } from "../../generated/graphql";
import { useSession } from "next-auth/react";

const GET_SKILLS = gql`
  query Skills {
    skills {
      id
      name
    }
  }
`;

export const Skills = () => {
  // const { status } = useSession();
  // let content;

  // const {
  //   data: { skills },
  //   error,
  // } = useSuspenseQuery<{ skills: Skill[] }>(GET_SKILLS);

  // if (status === "loading") {
  //   content = <p>Loading...</p>;
  // }

  // if (status === "unauthenticated") {
  //   content = <p>Not authenticated</p>;
  // }
  // if (status === "authenticated") {
  //   content = <div>{JSON.stringify(skills)}</div>;
  // }

  // return <div>{content}</div>;
  return <div>test</div>;
};
