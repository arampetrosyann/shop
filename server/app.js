const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("./config/env.config");
const schema = require("./graphql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));

app.use(
  "/graphql",
  graphqlHTTP((req, res) => ({
    schema,
    context: { req, res },
    graphiql: true,
  }))
);

app.listen(env.PORT);
