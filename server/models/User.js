const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('correctPercent').get(function () {
    if (this.questionsAnswered == 0) {
        return 0;
    } else {
        return this.questionsCorrect * 100 / this.questionsAnswered;
    }
});
userSchema.virtual('title').get(function () {
    switch (true) {
        case (this.questionsAnswered < 20):
            return "'Not smarter than a 5th grader'";
        case (this.questionsAnswered < 50):
            return "'Novice'";
        case (this.questionsAnswered < 100):
            return "'Intermediate'";
        case (this.questionsAnswered < 200):
            return "'Expert'";
        case (this.questionsAnswered < 500):
            return "'Big Brain'";
        case (this.questionsAnswered < 1000):
            return "'Genius'";
        default:
            return 'Novice';
    }
})

const User = model('User', userSchema);

module.exports = User;