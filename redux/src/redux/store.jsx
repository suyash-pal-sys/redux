import { configureStore } from "@reduxjs/toolkit";
import { countReducer, todoReducer } from "./slices";

const store = configureStore({
   reducer :{
      count:countReducer,
      todo:todoReducer
   }
})
export default store