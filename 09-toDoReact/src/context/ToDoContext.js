import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
  todoArray: [
    {
      id: 1,
      todo_msg: 'Learn React',
      completed: false,
      addDate: Date.getDate,
    },
  ],
  addToDo: (todo) => {},
  updatedToDo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
  return useContext(ToDoContext);
};
