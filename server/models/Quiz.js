const { Schema, model } = require('mongoose');

const quizSchema = new Schema(
    {
      quizName: {
        type: String,
        required: true,
        unique: true,
      },
      questionsCorrect: {
        type: Number,
        default: 0
      },
      questionsAnswered: {
        type: Number,
        default: 0
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );