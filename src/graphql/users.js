const { gql } = require("@apollo/client");

export const USERS_QUERY = gql`
  query AllUsers {
    allUsers(role: DEVELOPER) {
      data {
        name
        email
        role
      }
    }
  }
`;
