import { createSlice } from "@reduxjs/toolkit";

const initialState={
  deyer:0,
}

export const counterSlice=createSlice({
  name:"nana",
  initialState,
  reducers:{
    increment:(state)=>{
state.deyer+=1
    },
    decrement:(state)=>{
      state.deyer-=1
          },
          incrementByUser:(state,action)=>{
            state.deyer+=action.payload
          }
  }
})
export const {increment,decrement,incrementByUser}=counterSlice.actions
export default counterSlice.reducer