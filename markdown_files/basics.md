# GraphQL
### Graphql is a query language, used to get data. request data from api.
1. There are 2 types of requests, query(GET) and mutation (POST, DELETE, PUT).
2. GraphQL can exist between a client and api layer separately or can be a sole backend like express with graphql or django with Graphene (graphql).

### difference between GraphQL and REST API:
1. Single EndPoint : Graphql has a single endpoint which is **/graphql**.
2. Over fetching and Under fetching: Making less api calls to fetch data which is under fetching. We can use what data we need from the front end. 

### Basics Types and Queries:
1. There are 5 basic types: ID, String, Boolean, Float and Int 
2. ! at the end of the type defies non null type. for example :

```
type User {
    id: ID!
    name: String!
    isMarried: Boolean
}

```
3. We can have arrays inside a query. This is called nested queries. For example:
```
type User {
    id: ID!
    name: String!
    isMarried: Boolean
    friends: [User!] --> This means user is required.
}
```
### Queries:
1. The query inputs can be directly provided as an argument or can be provided as an input. For example:

```
input UserInput {
    id: ID
    name: String
}
```
```
type Query {
    users: [User]
    user(input: UserInput): User  ---> or this can be written as: user(id: ID, name: String)
}
```

2. Querying information from an api. Example Api: https://countries.trevorblades.com/
    - Querying Country (In this api, Country Query has another type defined which is Country): So in order to query this we write it in the following way(----> I can query what fields I want. For now i want name, phone):
    ```
    {
        country(code:"IN") {
            name
            phone
        }
    }
    ```
    - Querying a continent inside a country:
    ```
    {
        country(code:"IN") {
            name
            phone
            continent {
                name
                countries {
                    name
                }
            }
        }
    }
    ```













    ##### Learned from PedroTech Youtube Channel. link: [https://www.youtube.com/watch?v=yqWzCV0kU_c]