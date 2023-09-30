import { gql } from "@apollo/client";

const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export { GET_SKILLS };
