import mongoose from 'mongoose';

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
  completedAt: { type: Date, default: null },
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default TodoModel;
