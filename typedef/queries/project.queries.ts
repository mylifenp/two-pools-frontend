import { gql } from "@apollo/client";
import { PROJECT } from "../fragments";

const GET_PROJECTS = gql`
  ${PROJECT.INFO_FRAGMENT}
  query GetProjects {
    projects {
      ...ProjectInfoPart
      attachments {
        name
        url
      }
    }
  }
`;

export { GET_PROJECTS };
