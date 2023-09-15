"use client";
import { useSession } from "next-auth/react";
import { graphqlClient } from "../lib/graphql-client";
import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import { graphql } from "../gql";

const testDoc = graphql(/* GraphQL */ `
  query test {
    test {
      name
      email
    }
  }
`);

export const Info = () => {
  const { data: session } = useSession();

  return <div>info</div>;
};
