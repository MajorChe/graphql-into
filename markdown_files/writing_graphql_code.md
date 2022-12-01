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
    1. parent -> gives the resolved value of the parent in the chain of types. If its not passed simple use _
    2. args -> all the required parameters are passed here, eg: id
 - Calling a query with arguments:
    ```
    query GetUser($userId: ID!) {
        user(id: $userId) {
            name
        }
    }
    ```
