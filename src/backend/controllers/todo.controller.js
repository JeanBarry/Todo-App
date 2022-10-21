const todoModel = require("../database/models/todo.model");

const getAllTodos = async () => {
  return todoModel.find();
};

const createTodo = async (todo) => {
  return todoModel.create(todo);
};

const updateTodo = async (todo) => {
  return todoModel.updateOne({ _id: todo._id }, todo);
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
};
