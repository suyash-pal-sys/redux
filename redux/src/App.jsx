import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decremnt, deleteAllItem, deleteItem, increment } from './redux/slices'

const App = () => {
  const [inputData,setInputData] = useState("")
  const data = useSelector((store)=>store.count.number)
  const todoData = useSelector((store)=>store.todo.todoList)
  const dispatch = useDispatch()
  const increase = ()=>{
    dispatch(increment())
  }
  const decrease = ()=>{
    dispatch(decremnt())
  }
  const addData = ()=>{
    dispatch(addItem(inputData))
    setInputData("")
  }
  const deleteTodo =(index)=>{
    dispatch(deleteItem(index))
  }
  const deletAll =()=>{
    dispatch(deleteAllItem())
  }
  return (
<>
   <p>{data}</p>
   <button onClick={increase}>Increase</button>
   <button onClick={decrease}>Decrement</button>
   <br/>
   <br/>
   <input type='text' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
   <button style={{color:'white',background:'black'}} onClick={addData}>Add</button>
   {todoData?.map((datalist, index) => {
  return (
    <div style={{ border: '2px solid red' }} key={index}>
      {datalist} <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  );
})}
<button onClick={deletAll}>Delete All</button>
   </>
  )
}

export default App
