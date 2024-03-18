import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../reducers/TaskSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});