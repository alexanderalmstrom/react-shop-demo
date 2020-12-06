const { gql } = require("@apollo/client");

export const USERS_QUERY = gql`
  query AllUsers {
    allUsers(role: ADMIN) {
      data {
        name
        email
        role
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
      user {
        _id
        name
        email
        role
      }
    }
  }
`;
