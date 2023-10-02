import { CodegenConfig } from "@graphql-codegen/cli";
import env_config from "./config";

const { GQL_API_URL, GQL_ACCESS_TOKEN, GQL_ID_TOKEN } = env_config;

// const url = GQL_API_URL;
// const access_token = process.env.GQL_ACCESS_TOKEN as string;
// const id_token = process.env.GQL_ID_TOKEN as string;

const config: CodegenConfig = {
  schema: [
    {
      [GQL_API_URL]: {
        headers: {
          access_token: GQL_ACCESS_TOKEN,
          id_token: GQL_ID_TOKEN,
        },
      },
    },
  ],
  documents: [
    "./app/**/*.tsx",
    "./app/**/*.ts",
    "./typedef/**/*.ts",
    "./typedef/**/*.tsx",
  ],
  watch: false,
  ignoreNoDocuments: true,
  generates: {
    "./generated/types.ts": {
      // preset: "client",
      overwrite: true,
      plugins: [
        // "typescript-apollo-client-helpers",
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        reactApolloVersion: 3,
      },
    },
  },
};

export default config;
