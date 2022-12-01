const { UserList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    users:() => {
        return UserList;
    },
    user:(parent, args) => {
        const id = Number(args.id)
        const user = _.find(UserList, {id})
        return user
    }
  },
};

module.exports = { resolvers };
