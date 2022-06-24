import {createSlice} from "@reduxjs/toolkit"



 export const todoslice=createSlice({
     name:"todos",
     initialState:[],
     reducers:{
         addTodo:(state,action)=>{
             state.push(action.payload)
         }
     }
 })

//   get actin creater function
export const {addTodo}=todoslice.actions
// export reducer
 export default todoslice.reducer;