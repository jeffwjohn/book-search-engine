const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select("-__v -password");
    },

    // get a user by _id
    userById: async (parent, { _id }) => {
      return User.findOne({ _id })
      .select("-__v -password");
    },
  },
  Mutation: {
      
  }
};

module.exports = resolvers;

// IMPORTANT
// The Apollo server library can also be set up to pass the data sources, such as the database model we're working with, as an argument to the resolver function. If you ever look at the tutorial Apollo has on its website, you'll see that they set it up in that way, so don't be alarmed if it looks different from how we've set it up here.
