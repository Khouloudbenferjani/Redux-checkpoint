import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from '../redux/TaskSlice'

export const store = configureStore({
  reducer: {task:TaskSlice},
})
