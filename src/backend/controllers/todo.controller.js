import TodoModel from '../database/models/todo.model';

const getAllTodos = async () => TodoModel.find();

const getAllTodosByUserId = async (userId) => TodoModel.find({ userId });

const createTodo = async (todo) => TodoModel.create(todo);

const updateTodo = async (id, todo) => TodoModel.updateOne({ _id: id }, todo);

const deleteTodo = async (id) => TodoModel.deleteOne({ _id: id });

const todoController = {
  getAllTodos,
  getAllTodosByUserId,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoController;
