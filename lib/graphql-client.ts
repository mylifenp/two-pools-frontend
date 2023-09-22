import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";

const access_token = `${process.env.GQL_ACCESS_TOKEN}`;
const id_token = `${process.env.GQL_ID_TOKEN}`;

// const access_token = localStorage.getItem("access-token") ?? "";
// const id_token = localStorage.getItem("id-token") ?? "";

export const graphqlClient = new GraphQLClient(
  process.env.GQL_API_URL as string,
  {
    headers: {
      "access-token": access_token,
      "id-token": id_token,
    },
  }
);
