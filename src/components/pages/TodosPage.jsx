import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { auth } from '../../config/firebase';
import { addTodo, updateTodo, getTodosByUserId } from '../../utils/api/todos';
import Header from '../organisms/Header';
import TodoInput from '../molecules/TodoInput';
import Todo from '../molecules/Todo';
import mappers from '../../utils/mappers';
import styles from './TodosPage.module.css';
import responsive from '../../styles/responsive.module.css';

const todoStatusFilter = ({ done }, requiredStatus) => done === requiredStatus;

const todoOutputParser = (todo) => {
  return mappers.todoOutputMapper(todo);
};

const todoInputParser = (todoContent, userId) => {
  return mappers.todoInputMapper(todoContent, userId);
};

const todoRebuildParser = (todo) => {
  return mappers.todoRebuildMapper(todo);
};

function TodosPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = '/';
      } else {
        setIsLoggedIn(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const getUserId = () => {
    const user = auth.currentUser;
    return user.uid;
  };

  const {
    status,
    data: todos,
    refetch,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodosByUserId(getUserId()),
    enabled: isLoggedIn,
  });

  if (status === 'loading') {
    return (
      <div className={`${styles.page} ${styles.loading_container}`}>
        <p className={styles.loading_text}>Loading...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={`${styles.page} ${styles.loading_container}`}>
        <p className={styles.loading_text}>
          There was an error loading your Todos
        </p>
      </div>
    );
  }

  const createTodo = (todoContent, userId) => {
    const todo = todoInputParser(todoContent, userId);
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
          <div className={`${responsive.desktop} ${styles.todoInputContainer}`}>
            <TodoInput
              backgroundColor="#edd3c4"
              buttonLabel="Add Todo"
              inputPlaceholder="What do you want to do?"
              inputWidth="500px"
              onButtonClick={(value) => {
                const userId = getUserId();
                createTodo(value, userId);
              }}
              width="700px"
              fontSize="1.3rem"
            />
          </div>
          <div
            className={`${responsive.mobile} ${styles.todoInputMobileContainer}`}
          >
            <TodoInput
              backgroundColor="#edd3c4"
              buttonLabel="Add"
              inputPlaceholder="What do you want to do?"
              inputWidth="220px"
              onButtonClick={(value) => {
                const userId = getUserId();
                createTodo(value, userId);
              }}
              width="320px"
              height="80px"
              fontSize="0.8rem"
            />
          </div>
          {hasInProgressTodos && (
            <div className={styles.todosContainer}>
              {todos.map((todo) => {
                const validTodo = todoStatusFilter(todo, false);
                const todoProps = todoOutputParser(todo);
                return (
                  validTodo && (
                    <div key={todoProps.id}>
                      <div className={responsive.desktop}>
                        <Todo
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
                      </div>
                      <div className={responsive.mobile}>
                        <Todo
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
                          fontSize="0.8rem"
                          height="50px"
                          width="320px"
                          buttonWidth="80px"
                          padding="1rem 0 1rem 1rem"
                        />
                      </div>
                    </div>
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
                    <div key={todoProps.id}>
                      <div className={responsive.desktop}>
                        <Todo
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
                      </div>
                      <div className={responsive.mobile}>
                        <Todo
                          backgroundColor="#c8adc0"
                          buttonLabel="Complete"
                          buttonOnClick={() => {}}
                          content={todoProps.content}
                          createdAt={todoProps.createdAt}
                          completedAt={todoProps.completedAt}
                          fontColor="#000000"
                          fontSize="0.8rem"
                          height="50px"
                          width="320px"
                          done
                        />
                      </div>
                    </div>
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
