import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
  const dispatch = useDispatch();
 const todos = useSelector(state => state.todos);
 const handleDelete = id => dispatch({
  type: "DELETE_TODO",
  payload: id
 });

 if (!todos || !todos.length) {
  return <p>No Todos</p>
 }

 return(
  <div>
    {todos.map(todo => <p key={todo.id}>{todo.label} <button onClick={()=>handleDelete(todo.id)}>Delete</button></p>)}
  </div>
 )

}



const TodoInput= () => {
  const dispatch =useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    setNewTodo(event.target.value)
    // console.log(newTodo)
  }
  //
  const handleAdd = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 100)
    }
    }
  )

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange}/> &nbsp;
      <button onClick={handleAdd}>Add Todo</button> 
    </div>
  )
}

const TodoList = () => {
  return (
    <div>
      <TodoInput />
      <Todos />
    </div>
  )
}
export default TodoList