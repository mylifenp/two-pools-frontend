import { gql } from "@apollo/client";

const IS_EMAIL_SUBSCRIBED = gql`
  query IsEmailSubscribed($input: EmailSubscriptionInput!) {
    isEmailSubscribed(input: $input) {
      status
      message
    }
  }
`;

export { IS_EMAIL_SUBSCRIBED };
