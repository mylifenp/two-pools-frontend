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
  ignoreNoDocuments: true,
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
