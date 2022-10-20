import styles from "../styles/Content.module.css";
import { useEffect, useState } from "react";

const Content = () => {
  const [todos, setTodos] = useState([]);

  const getTimePassed = (createdAt) => {
    //TODO: return time passed since createdAt
    return true;
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const res = newTodos.find((todo) => todo._id === id);
    newTodos[newTodos.indexOf(res)].completed = !res.completed;
    setTodos(newTodos);
    //TODO: update the todo in the database
  };

  const getTodos = async () => {
    const response = await fetch(`/api/todo`);
    const json = await response.json();
    console.log(json);
    const todos = json ?? [];
    setTodos(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.main_section} id="main-section">
        <h1 className={styles.section_title}>Todos</h1>
        <div className={styles.input_group}>
          <input className={styles.todo_content_input} type="text"></input>
          <button className={styles.add_todo}>Add Todo</button>
        </div>
        <ul className={styles.todo_list}>
          {todos.map((todo) => {
            if (!todo.completed) {
              return (
                <li className={styles.list_item} key={todo._id}>
                  <p>{todo.content}</p>
                  {/*<p>Time since start: {getTimePassed(todo.createdAt)}</p>*/}
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
            if (todo.completed) {
              return (
                <li className={styles.list_item} key={todo._id}>
                  <p>{todo.content}</p>
                  {/*<p>Time taken: {getTimePassed(todo.createdAt)}</p>*/}
                  <button className={styles.item_button}>Clear Todo</button>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </main>
  );
};

export default Content;
