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
  createdAt: { type: Date, required: true },
  completedAt: { type: Date, required: true },
});

const todoModel = mongoose.model("Todo", TodoSchema);

module.exports = todoModel;
