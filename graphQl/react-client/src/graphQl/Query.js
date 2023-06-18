import { gql } from "@apollo/client";

export const USER_TYPE_1 = gql`
  query {
    getUserList {
      id
      first_name
      last_name
      gender
      email
    }
  }
`;

export const USER_TYPE_2 = gql`
  query {
    getUserList {
      first_name
      last_name
    }
  }
`;
