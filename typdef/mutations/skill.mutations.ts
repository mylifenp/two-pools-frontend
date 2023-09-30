import { gql } from "@apollo/client";

const ADD_SKILL = gql`
  mutation addSkill($input: SkillInput!) {
    addSkill(input: $input) {
      id
      name
    }
  }
`;

const UPDATE_SKILL = gql`
  mutation updateSkill($id: ID!, $input: SkillInput!) {
    updateSkill(id: $id, input: $input) {
      id
      name
    }
  }
`;

const DELETE_SKILL = gql`
  mutation deleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      id
      name
    }
  }
`;

export { ADD_SKILL, UPDATE_SKILL, DELETE_SKILL };
