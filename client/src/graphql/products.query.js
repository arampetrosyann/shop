import { gql } from "apollo-boost";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      description
      img
    }
  }
`;

export default GET_PRODUCTS;
