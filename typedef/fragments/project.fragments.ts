import { gql } from "@apollo/client";

const INFO_FRAGMENT = gql`
  fragment ProjectInfoPart on Project {
    id
    title
    createdAt
  }
`;

export { INFO_FRAGMENT };
