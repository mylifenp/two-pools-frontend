import { gql } from "@apollo/client";

const ADD_FRAGMENT = gql`
  fragment NewSkill on Skill {
    id
    name
  }
`;

export { ADD_FRAGMENT };
