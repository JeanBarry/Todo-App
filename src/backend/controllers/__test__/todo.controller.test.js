const todoController = require("../todo.controller");
const todoModel = require("../../database/models/todo.model");
const allTodos = require("./__mocks__/allTodos.json");
const newTodo = require("./__mocks__/newTodo.json");

jest.mock("../../database/models/todo.model");

describe("Todo controller getAllTodos", () => {
  test("getAllTodos should be a function", () => {
    expect(typeof todoController.getAllTodos).toBe("function");
  });
  test("getAllTodos should should call Todo model find", async () => {
    await todoController.getAllTodos();
    expect(todoModel.find).toHaveBeenCalled();
  });
  test("getAllTodos should return a list of todos", async () => {
    todoModel.find.mockReturnValue(allTodos);
    const todos = await todoController.getAllTodos();
    expect(todos).toEqual(allTodos);
  });
});

describe("Todo controller createTodo", () => {
  test("createTodo should be a function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
  test("createTodo should should call Todo model create", async () => {
    await todoController.createTodo();
    expect(todoModel.create).toHaveBeenCalled();
  });
  test("createTodo should return a todo", async () => {
    todoModel.create.mockReturnValue(newTodo);
    const todo = await todoController.createTodo(newTodo);
    expect(todo).toEqual(newTodo);
  });
});
