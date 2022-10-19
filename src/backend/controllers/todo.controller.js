const todoModel = require("../database/models/todo.model");

const getAllTodos = async () => {
  const todos = await todoModel.find();
  console.log("todos", todos);
  return todos;
};

module.exports = {
  getAllTodos,
};
