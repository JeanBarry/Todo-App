const TodoController = require("../../backend/controllers/todo.controller");
const { connectToDatabase } = require("../../backend/database");

connectToDatabase();

const strategies = {
  GET: TodoController.getAllTodos,
  POST: TodoController.createTodo,
  PUT: TodoController.updateTodo,
};

module.exports = async (req, res) => {
  const strategy = strategies[req.method];
  if (strategy) {
    const result = await strategy(req.body);
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
