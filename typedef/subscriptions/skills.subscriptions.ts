import { gql } from "@apollo/client";

const ADDED = gql`
  subscription SkillAdded {
    skillAdded {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

const DELETED = gql`
  subscription SkillDeleted {
    skillDeleted {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

const UPDATED = gql`
  subscription SkillUpdated($id: ID!) {
    skillUpdated(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export { ADDED, DELETED, UPDATED };
