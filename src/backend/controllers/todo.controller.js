const todoModel = require("../database/models/todo.model");

const getAllTodos = async () => {
  return todoModel.find();
};

module.exports = {
  getAllTodos,
};
