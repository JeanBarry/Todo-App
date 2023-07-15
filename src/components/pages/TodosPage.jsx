import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTodos, addTodo, updateTodo } from '../../utils/api/todos';
import styles from './TodosPage.module.css';
import Header from '../organisms/Header';
import TodoInput from '../molecules/TodoInput';
import Todo from '../molecules/Todo';
import mappers from '../../utils/mappers';

const todoStatusFilter = ({ done }, requiredStatus) => done === requiredStatus;

const todoOutputParser = (todo) => {
  return mappers.todoOutputMapper(todo);
};

const todoInputParser = (inputValue) => {
  return mappers.todoInputMapper(inputValue);
};

const todoRebuildParser = (todo) => {
  return mappers.todoRebuildMapper(todo);
};

function TodosPage() {
  const {
    status,
    data: todos,
    refetch,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>There was an error loading your Todos</p>;
  }

  const createTodo = (inputValue) => {
    const todo = todoInputParser(inputValue);
    addTodo(todo)
      .then(() => {
        refetch();
      })
      .catch(() => {
        // TODO: Add error handling showing a message to the user
        // eslint-disable-next-line no-console
        console.error('There was an error creating your todo');
      });
  };

  const completeTodo = (todo) => {
    const rebuiltTodo = todoRebuildParser(todo);
    rebuiltTodo.done = true;
    updateTodo(rebuiltTodo)
      .then(() => {
        refetch();
      })
      .catch(() => {
        // TODO: Add error handling showing a message to the user
        // eslint-disable-next-line no-console
        console.error('There was an error updating your todo');
      });
  };

  const hasDoneTodos = todos.some((todo) => todoStatusFilter(todo, true));
  const hasInProgressTodos = todos.some((todo) =>
    todoStatusFilter(todo, false),
  );

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.container__title}>Todos</p>
          <div className={styles.todoInputContainer}>
            <TodoInput
              backgroundColor="#edd3c4"
              buttonLabel="Add Todo"
              inputPlaceholder="What do you want to do?"
              inputWidth="500px"
              onButtonClick={(value) => {
                createTodo(value);
              }}
              width="700px"
              fontSize="1.3rem"
            />
          </div>
          {hasInProgressTodos && (
            <div className={styles.todosContainer}>
              {todos.map((todo) => {
                const validTodo = todoStatusFilter(todo, false);
                const todoProps = todoOutputParser(todo);
                return (
                  validTodo && (
                    <Todo
                      key={todoProps.id}
                      backgroundColor="#c8adc0"
                      buttonLabel="Complete"
                      buttonOnClick={() => {
                        completeTodo({
                          id: todoProps.id,
                          content: todoProps.content,
                          createdAt: todoProps.createdAt,
                          done: false,
                        });
                      }}
                      content={todoProps.content}
                      createdAt={todoProps.createdAt}
                      fontColor="#000000"
                      fontSize="1.3rem"
                      height="80px"
                      width="700px"
                    />
                  )
                );
              })}
            </div>
          )}
        </div>
        {hasDoneTodos && (
          <div className={styles.container}>
            <p className={styles.container__title}>Done</p>
            <div className={styles.todosContainer}>
              {todos.map((todo) => {
                const validTodo = todoStatusFilter(todo, true);
                const todoProps = todoOutputParser(todo);
                return (
                  validTodo && (
                    <Todo
                      key={todoProps.id}
                      backgroundColor="#c8adc0"
                      buttonLabel="Complete"
                      buttonOnClick={() => {}}
                      content={todoProps.content}
                      createdAt={todoProps.createdAt}
                      completedAt={todoProps.completedAt}
                      fontColor="#000000"
                      fontSize="1.3rem"
                      height="80px"
                      width="700px"
                      done
                    />
                  )
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default TodosPage;
