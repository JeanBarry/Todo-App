import todoController from '../todo.controller';
import todoModel from '../../database/models/todo.model';
import allTodos from './allTodos.json';
import newTodo from './newTodo.json';

jest.mock('../../database/models/todo.model');

describe('Todo controller getAllTodos', () => {
  test('getAllTodos should be a function', () => {
    expect(typeof todoController.getAllTodos).toBe('function');
  });
  test('getAllTodos should call Todo model find', async () => {
    await todoController.getAllTodos();
    expect(todoModel.find).toHaveBeenCalled();
  });
  test('getAllTodos should return a list of todos', async () => {
    todoModel.find.mockReturnValue(allTodos);
    const todos = await todoController.getAllTodos();
    expect(todos).toEqual(allTodos);
  });
});

describe('Todo controller getAllTodosByUserId', () => {
  test('getAllTodosByUserId should be a function', () => {
    expect(typeof todoController.getAllTodosByUserId).toBe('function');
  });
  test('getAllTodosByUserId should call Todo model find', async () => {
    await todoController.getAllTodosByUserId(newTodo.userId);
    expect(todoModel.find).toHaveBeenCalledWith({ userId: newTodo.userId });
  });
  test('getAllTodosByUserId should return a list of todos', async () => {
    todoModel.find.mockReturnValue(allTodos);
    const todos = await todoController.getAllTodosByUserId(newTodo.userId);
    expect(todos).toEqual(allTodos);
  });
});

describe('Todo controller createTodo', () => {
  test('createTodo should be a function', () => {
    expect(typeof todoController.createTodo).toBe('function');
  });
  test('createTodo should should call Todo model create', async () => {
    await todoController.createTodo();
    expect(todoModel.create).toHaveBeenCalled();
  });
  test('createTodo should return a todo', async () => {
    todoModel.create.mockReturnValue(newTodo);
    const todo = await todoController.createTodo(newTodo);
    expect(todo).toEqual(newTodo);
  });
});

describe('Todo controller updateTodo', () => {
  test('updateTodo should be a function', () => {
    expect(typeof todoController.updateTodo).toBe('function');
  });
  test('updateTodo should call Todo model updateOne', async () => {
    await todoController.updateTodo(newTodo);
    expect(todoModel.updateOne).toHaveBeenCalled();
  });
  test('updateTodo should return an updated todo', async () => {
    todoModel.updateOne.mockReturnValue(newTodo);
    const todo = await todoController.updateTodo(newTodo.id, newTodo);
    expect(todo).toEqual(newTodo);
  });
});
