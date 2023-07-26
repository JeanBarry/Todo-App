const todoInputMapper = (todoContent, userId) => ({
  content: todoContent,
  done: false,
  userId,
  createdAt: new Date().toISOString(),
});

const todoOutputMapper = (todo) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: todo._id,
  content: todo.content,
  done: todo.done,
  userId: todo.userId,
  createdAt: todo.createdAt,
  completedAt: todo.completedAt,
});

const todoRebuildMapper = ({ id, content, done, userId, createdAt }) => ({
  id,
  content,
  done,
  userId,
  createdAt,
  completedAt: new Date().toISOString(),
});

const mappers = {
  todoInputMapper,
  todoOutputMapper,
  todoRebuildMapper,
};

export default mappers;
