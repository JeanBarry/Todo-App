import TodoController from '../controllers/todo.controller';
import connectToDatabase from '../database';

connectToDatabase();

const routes = {
  '/api/todo': {
    GET: TodoController.getAllTodos,
    POST: TodoController.createTodo,
  },
  '/api/todo/:id': {
    PUT: TodoController.updateTodo,
  },
};

export default routes;
