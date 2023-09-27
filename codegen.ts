import { CodegenConfig } from "@graphql-codegen/cli";

const url = process.env.GQL_API_URL as string;
const access_token = process.env.GQL_ACCESS_TOKEN as string;
const id_token = process.env.GQL_ID_TOKEN as string;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          access_token: access_token,
          id_token: id_token,
        },
      },
    },
  ],
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  watch: false,
  ignoreNoDocuments: true,
  generates: {
    "./generated/": {
      preset: "client",
      overwrite: true,
      plugins: [
        "typescript-apollo-client-helpers",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
