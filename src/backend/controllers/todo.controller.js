import TodoModel from '../database/models/todo.model';

const getAllTodos = async () => TodoModel.find();

const createTodo = async (todo) => TodoModel.create(todo);

const updateTodo = async (id, todo) => TodoModel.updateOne({ _id: id }, todo);

const todoController = {
  getAllTodos,
  createTodo,
  updateTodo,
};

export default todoController;
