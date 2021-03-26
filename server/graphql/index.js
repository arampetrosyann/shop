const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { JSONResolver, JWTResolver } = require("graphql-scalars");
const jwt = require("jsonwebtoken");
const env = require("../config/env.config");
const createToken = require("../javascripts/createToken");
const users = require("../data/users.data");
const products = require("../data/products.data");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    img: { type: GraphQLString },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: JSONResolver,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newUser = { email: args.email, password: args.password };

        const token = createToken(newUser);

        users.push(newUser);

        return { token };
      },
    },
    deleteUser: {
      type: JSONResolver,
      args: { id: { type: JWTResolver } },
      resolve(parent, args) {
        const token = "";

        jwt.verify(args.id, env.SECRET, (err, data) => {
          if (err) {
            return null;
          } else {
            const userInd = users.findIndex((user) => {
              return user.email === data.email;
            });

            users.splice(userInd, 1);
          }
        });

        return { token };
      },
    },
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return products.find((product) => {
          return product.id == args.id;
        });
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return products;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
