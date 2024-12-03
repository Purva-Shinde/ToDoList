import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
name:'Todos',
initialState:[],
reducers:{
    addTodo:(state,action)=>{
        console.log("Payload received:", action.payload);  

state.push({
    text:action.payload.text,
    id:action.payload.id

})
},
deleteToDo:(state,action)=>{
 return state.filter(todo=>todo.id !== action.payload.id);
}
 
}
})
export const {addTodo,deleteToDo}=todoSlice.actions;
export default todoSlice.reducer;