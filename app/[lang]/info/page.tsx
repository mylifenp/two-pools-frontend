import { Info } from "@components/info.component";

// // import { graphql } from "../../gql";
// // import { graphqlClient } from "../../lib/graphql-client";

// // const testDoc = graphql(/* GraphQL */ `
// //   query test {
// //     test {
// //       name
// //       email
// //     }
// //   }
// // `);

const Page = async () => {
  // const session = await getServerSession(AuthOptions);
  // const { test } = await graphqlClient(
  //   session?.access_token,
  //   session?.id_token
  // ).request(testDoc);
  // console.log("session", session);
  return (
    <>
      just some value
      <Info />
    </>
  );
};

export default Page;
