import { gql } from "@apollo/client";

const ADD_EMAIL_SUBSCRIPTION = gql`
  mutation AddEmailSubscription($input: EmailSubscriptionInput!) {
    addEmailSubscription(input: $input) {
      status
      message
    }
  }
`;

const DELETE_EMAIL_SUBSCRIPTION = gql`
  mutation DeleteEmailSubscription($input: EmailSubscriptionInput!) {
    deleteEmailSubscription(input: $input) {
      status
      message
    }
  }
`;

export { ADD_EMAIL_SUBSCRIPTION, DELETE_EMAIL_SUBSCRIPTION };
