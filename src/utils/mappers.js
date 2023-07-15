const todoInputMapper = (todoInput) => ({
  content: todoInput,
  done: false,
  createdAt: new Date().toISOString(),
});

const todoOutputMapper = (todo) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: todo._id,
  content: todo.content,
  done: todo.done,
  createdAt: todo.createdAt,
  completedAt: todo.completedAt,
});

const todoRebuildMapper = ({ id, content, done, createdAt }) => ({
  id,
  content,
  done,
  createdAt,
  completedAt: new Date().toISOString(),
});

const mappers = {
  todoInputMapper,
  todoOutputMapper,
  todoRebuildMapper,
};

export default mappers;
