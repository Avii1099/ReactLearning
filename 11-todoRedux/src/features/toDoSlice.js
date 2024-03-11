import { createSlice, nanoid } from '@reduxjs/toolkit';

let dateObj = new Date();
let dateStr = `${dateObj.getDay()}-${
  dateObj.getMonth() + 1
}-${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
const todos = JSON.parse(localStorage.getItem('todos'));

const initialState = {
  todos: todos,
};

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text_message: action.payload,
        completed: false,
        createdDate: dateStr,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateToDo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].text_message = action.payload.text_message;
      }
    },
    toggleCompleted: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
  },
});

export const { addToDo, removeToDo, updateToDo, toggleCompleted } =
  toDoSlice.actions;
export default toDoSlice.reducer;
