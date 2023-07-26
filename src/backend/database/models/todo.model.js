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
  userId: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, required: true },
  completedAt: { type: Date, default: null },
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default TodoModel;
