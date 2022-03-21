import { gql } from '@apollo/client';

export const signIn = gql`
  mutation signin($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }

      customerUserErrors {
        code
        message
      }
    }
  }
`;

export const signUp = gql`
  mutation signup($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        message
      }
    }
  }
`;

export const subscribe = gql`
  mutation customerEmailSubscribe($email: String!) {
    customerEmailSubscribe(email: $email) {
      error
      userErrors {
        message
      }
    }
  }
`;
