const { gql } = require("apollo-server");

const typeDefs = gql`
    type user {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!

    }

    type Query {
        users: [user!]!
    }

    enum Nationality {
        CANADA
        INDIA
        GERMANY
        CHILE
        BRAZIL
    }
`

module.exports = {typeDefs}