const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { findOneAndUpdate } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // check if users exist
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      // check if user exists with username and credentials
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPassword = await user.isCorrectPassword(password);

      // check password
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      console.log('args', args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, {id, answered, correct}, context) => {
      console.log(answered, correct);
      const user = await User.findOneAndUpdate({ _id: context._id}, {questionsAnswered: answered, questionsCorrect: correct})
      console.log('user', user);
      return { user };
    },
  },
};

module.exports = resolvers;
