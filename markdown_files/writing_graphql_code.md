## Building queries in graphql

### Using node, apollo-server and graphql

1. Define initial query called type Query to define all the requests.
2. Add typedefs (define the queries and types and inputs) (usually in schema folder)
3. Add resolvers (they fetch data from database)

### enums in graphql

- enums are used to validate the data
- enum types are capital letters as best practice.

### passing arguments in a query

- can simply pass required arguments inside (). for eg: user(id: ID!)
- Data needs to be defined in a resolver for the query.

### passing arguments in a resolver

- type of arguments that are defined in the function are:
  1. parent -> gives the resolved value of the parent in the chain of types. If its not passed simple use \_
  2. args -> all the required parameters are passed here, eg: id
- Calling a query with arguments:
  ```
  query GetUser($userId: ID!) {
      user(id: $userId) {
          name
      }
  }
  ```

### add new nested query type for a parent query

- In our example code, each user can have favorite movies list, and can be defined as a separate query in the resolvers which then interacts with the database to get the data. Eg:
  ```
  User: {
          favoriteMovies: () => {
          return _.filter(
              MovieList,
              (movie) => movie.yearReleased >= 2000 && movie.yearReleased <= 2010
          );
          },
      },
  ```

### Mutations

- For mutations, a type Mutation is to be defined and the query needs to be defined to make the change.
- In order to provide the input args for the mutation query, it can be defined inside () but best practice is to define a input type and add it to the query args. For Eg:

  ```
  type CreateUserInput {
      name: String!
      username: String!
      age: Int!
      nationality: Nationality!
  }

  type Mutation {
      createUser(input: CreateUserInput!): User!
  }
  ```

### Mutation resolvers

- A resolver is needed to interact with the data like before.
- Resolver function needs to be of same name as defined in type defs. For eg.: createUser

### Mutation Query

```
mutation CreateUser($createUserInput: CreateUserInput!){
 createUser(input: $createUserInput) {
   id
   name
   age
 }
}

```

- Variables for the above mutation:

```
{
  "createUserInput": {
    "name": "MajorChe",
    "username": "che",
    "age": 27
  }
}
```
