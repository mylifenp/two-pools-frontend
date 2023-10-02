import { gql } from "@apollo/client";
import { PROJECT } from "../fragments";

const ADD_PROJECT = gql`
  ${PROJECT.INFO_FRAGMENT}
  mutation AddProject($input: ProjectInput) {
    addProject(input: $input) {
      ...ProjectInfoPart
      attachments {
        name
        url
      }
    }
  }
`;

export { ADD_PROJECT };
