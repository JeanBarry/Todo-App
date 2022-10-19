const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: Date.now },
});

const todoModel = mongoose.model("Todo", TodoSchema);

module.exports = todoModel;
