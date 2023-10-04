import { gql } from "@apollo/client";
import { CATEGORY } from "@typedef/fragments";

const ADD_CATEGORY = gql`
  ${CATEGORY.FRAGMENT}
  mutation AddCategory($input: CategoryInput!) {
    addCategory(input: $input) {
      ...Category
    }
  }
`;

const UPDATE_CATEGORY = gql`
  ${CATEGORY.FRAGMENT}
  mutation UpdateCategory($id: ID!, $input: CategoryInput!) {
    updateCategory(id: $id, input: $input) {
      ...Category
    }
  }
`;

const DELETE_CATEGORY = gql`
  ${CATEGORY.FRAGMENT}
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      ...Category
    }
  }
`;

export { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY };
