import { gql } from "apollo-boost";

const ADD_USER = gql`
  mutation($email: String!, $password: String!) {
    addUser(email: $email, password: $password)
  }
`;

export const DELETE_USER = gql`
  mutation($id: JWT) {
    deleteUser(id: $id)
  }
`;

export default ADD_USER;
