const todoModel = require("../database/models/todo.model");

const getAllTodos = async () => {
  return todoModel.find();
};

const createTodo = async (todo) => {
  return todoModel.create(todo);
};

module.exports = {
  getAllTodos,
  createTodo,
};
