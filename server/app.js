const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const env = require("./config/env.config");
const schema = require("./graphql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));

const prod = app.get("env") === "production";

app.use(
  "/graphql",
  graphqlHTTP((req, res) => ({
    schema,
    context: { req, res },
    graphiql: true,
  }))
);

if (prod) {
  app.use(express.static(path.resolve("../", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../", "client", "build", "index.html"));
  });
}

app.listen(env.PORT);
