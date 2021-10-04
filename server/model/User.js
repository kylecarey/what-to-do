const mongoose = require("mongoose");

const Task = new mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean
    }
  }
)

const User = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    tasks: {
      type: [Task]
    }
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", User);
