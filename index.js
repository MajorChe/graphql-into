const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const { ApolloServer } = require("apollo-server");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at: ${url}`);
});
