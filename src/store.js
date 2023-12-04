import { configureStore } from "@reduxjs/toolkit";
import terror from "./features/counterSlice"

export const store=configureStore({
  reducer:{
nurane:terror,
  }
})