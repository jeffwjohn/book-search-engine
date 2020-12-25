const { User } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().sort({ createdAt: -1 });
      }
    }
  };
  
  module.exports = resolvers;

  // IMPORTANT
// The Apollo server library can also be set up to pass the data sources, such as the database model we're working with, as an argument to the resolver function. If you ever look at the tutorial Apollo has on its website, you'll see that they set it up in that way, so don't be alarmed if it looks different from how we've set it up here.
  