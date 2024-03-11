import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/toDoSlice';
export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
