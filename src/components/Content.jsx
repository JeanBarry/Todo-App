import styles from "../styles/Content.module.css";
import { useEffect, useState } from "react";

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTimeString = (timePassed) => {
    const timePassedInSeconds = timePassed / 1000;
    const timePassedInMinutes = timePassedInSeconds / 60;
    const timePassedInHours = timePassedInMinutes / 60;
    const timePassedInDays = timePassedInHours / 24;
    if (timePassedInDays > 1) {
      return `${Math.floor(timePassedInDays)} days`;
    } else if (timePassedInHours > 1) {
      return `${Math.floor(timePassedInHours)} hours`;
    } else if (timePassedInMinutes > 1) {
      return `${Math.floor(timePassedInMinutes)} minutes`;
    }
    return `${Math.floor(timePassedInSeconds)} seconds`;
  };

  const getTimePassed = (createdAt) => {
    const timeStart = new Date(createdAt);
    const timeNow = new Date();
    const timePassed = timeNow - timeStart;
    return getTimeString(timePassed);
  };

  const getTimeCompleted = (createdAt, completedAt) => {
    const timeStart = new Date(createdAt);
    const timeEnd = new Date(completedAt);
    const timePassed = timeEnd - timeStart;
    return getTimeString(timePassed);
  };

  const updateTodo = async (todo) => {
    await fetch("/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(todo),
    });
  };

  const completeTodo = async (id) => {
    const timeNow = new Date();
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((todo) => todo._id === id);
    updatedTodo.done = true;
    updatedTodo.completedAt = timeNow;
    newTodos[newTodos.indexOf(updatedTodo)] = updatedTodo;
    await updateTodo(updatedTodo);
    setTodos(newTodos);
  };

  const getTodos = async () => {
    const response = await fetch(`/api/todo`);
    const json = await response.json();
    const todos = json ?? [];
    setTodos(todos);
    setLoading(false);
  };

  const buildTodo = (content) => {
    return {
      content: content,
      done: false,
      createdAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    };
  };

  const createTodo = async () => {
    const input = document.getElementsByClassName(styles.todo_content_input)[0];
    const newTodo = buildTodo(input.value);
    input.value = "";
    const response = await fetch(`/api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const json = await response.json();
    const newTodos = [...todos, json];
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <main className={styles.main_container}>
      {loading ? (
        <div className={styles.loading_div}>Loading Todos</div>
      ) : (
        <>
          <section className={styles.main_section} id="main-section">
            <h1 className={styles.section_title}>Todos</h1>
            <div className={styles.input_group}>
              <input className={styles.todo_content_input} type="text"></input>
              <button className={styles.add_todo} onClick={createTodo}>
                Add Todo
              </button>
            </div>
            <ul className={styles.todo_list}>
              {todos.map((todo) => {
                if (!todo.done) {
                  return (
                    <li className={styles.list_item} key={todo._id}>
                      <p>{todo.content}</p>
                      <p>Time since start: {getTimePassed(todo.createdAt)}</p>
                      <button
                        className={styles.item_button}
                        onClick={() => completeTodo(todo._id)}
                      >
                        Complete Todo
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
          <section className={styles.done_section} id="done-section">
            <h1 className={styles.section_title}>Done</h1>
            <ul className={styles.done_list}>
              {todos.map((todo) => {
                if (todo.done) {
                  return (
                    <li className={styles.list_item} key={todo._id}>
                      <p>{todo.content}</p>
                      <p>
                        Time taken:{" "}
                        {getTimeCompleted(todo.createdAt, todo.completedAt)}
                      </p>
                      {/*<button className={styles.item_button}>Clear Todo</button>*/}
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};

export default Content;
