const { gql } = require("apollo-server");

const typeDefs = gql`
    type user {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!

    }

    type Query {
        users: [user!]!
    }
`

module.exports = {typeDefs}