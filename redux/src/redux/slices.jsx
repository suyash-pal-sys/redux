import { createSlice } from "@reduxjs/toolkit";
//counter
const counterSlice = createSlice({
  name:'count',
  initialState:{
    number:100
  },
  reducers:{
    increment:(state,action)=>{
      state.number= state.number+1
    },
    decremnt:(state)=>{
        state.number= state.number-1 
    }
  }
})

//todo 

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todoList:[]
    },
    reducers:{
        addItem:(state,action)=>{
         state.todoList.push(action.payload)
        },
        deleteItem:(state,action)=>{
        state.todoList=state?.todoList?.filter((_,index)=>{
            return index !==action.payload
        })
        },
        deleteAllItem:(state,action)=>{
            state.todoList.length=0
        }

    }
})
export const {addItem,deleteItem,deleteAllItem} = todoSlice.actions
export const todoReducer= todoSlice.reducer

export const {increment,decremnt} = counterSlice.actions
export const countReducer= counterSlice.reducer

