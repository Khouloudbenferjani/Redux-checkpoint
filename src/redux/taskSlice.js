import { createSlice } from '@reduxjs/toolkit'





export const TaskSlice = createSlice({
  name: 'task',
  initialState : [{ title: "TASK ONE", id: 1, isdone: false , color:'Light'},
{ title: "TASK TOW", id: 2, isdone: true , color:'Light'},
{ title: "TASK THREE", id: 3, isdone: false , color:'Light'}],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        title: action.payload.title,
        id: state.length+1,
        isdone: action.payload.isdone,
        
      };
      state.push(newTask);
    },
    editdone: (state, action) => {
      const stat = state.find((el) => el.id === action.payload);
      stat.isdone = !stat.isdone;
      console.log(state);
    },
    deleteTodo: (state, action) => {
      const stat = state.filter((el) => el.id !== action.payload);
      
      return stat;
    },
    editTask: (state, action) => {
      const id = action.payload.id;
      const edittile = action.payload.edittitle;
const todoToEdit = state.find((el) => el.id === id);
if (todoToEdit) {
  todoToEdit.title = edittile;
}
console.log(state);
}
    
}})

// Action creators are generated for each case reducer function
export const {addTask,editdone,deleteTodo,editTask} = TaskSlice.actions

export default TaskSlice.reducer