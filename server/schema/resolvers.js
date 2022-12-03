const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    // User resolvers
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = Number(args.id);
      const user = _.find(UserList, { id });
      return user;
    },
    // Movie resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => movie.yearReleased >= 2000 && movie.yearReleased <= 2010
      );
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let updatedUser;
      console.log("new username", newUsername);
      UserList.forEach((user) => {
        if (user.id === id) {
          user.username = newUsername;
          updatedUser = user;
        }
      });
      console.log("updated user", updatedUser);
      return updatedUser;
    },
    deleteUser: (parent, args) => {
      const id  = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
