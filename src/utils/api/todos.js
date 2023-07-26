import axios from 'axios';

export const getTodos = () => {
  return axios
    .get('/api/todo')
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
};

export const getTodosByUserId = (userId) => {
  return axios
    .get(`/api/todo/user/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
};

export const addTodo = (todo) => {
  return axios
    .post('/api/todo', todo)
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
};

export const updateTodo = (todo) => {
  return axios
    .put(`/api/todo/${todo.id}`, todo)
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
};

const todosApi = {
  getTodos,
  addTodo,
  updateTodo,
  getTodosByUserId,
};

export default todosApi;
