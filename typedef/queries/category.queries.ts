import { gql } from "@apollo/client";
import { CATEGORY } from "../fragments";

const GET_CATEGORIES = gql`
  ${CATEGORY.FRAGMENT}
  query GetCategories {
    categories {
      ...Category
    }
  }
`;

const GET_CATEGORY = gql`
  ${CATEGORY.FRAGMENT}
  query GetCategory($id: ID!) {
    category(id: $id) {
      ...Category
    }
  }
`;

export { GET_CATEGORIES, GET_CATEGORY };
