const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { findOneAndUpdate } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // check if users exist
      console.log('context.user', context.user);
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        console.log('server resolvers userData', userData);
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
    updateUser: async (parent, args, context) => {
      console.log(args, 'Iiiiiiiiiiiiiiiiiiiiiiioooo');
      console.log('context', context);
      const user = await User.findOneAndUpdate({username: args.username}, {questionsAnswered: args.questionsAnswered, questionsCorrect: args.questionsCorrect}, { new: true })
      console.log('user', user);
      return { user };
    },
  },
};

module.exports = resolvers;
