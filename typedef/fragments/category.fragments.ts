import { gql } from "@apollo/client";

const FRAGMENT = gql`
  fragment Category on Category {
    createdAt
    id
    name
    updatedAt
  }
`;

export { FRAGMENT };
