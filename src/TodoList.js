import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteToDo } from './slice/todoSlice';
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todos);
console.log("todos",todos)
  const handleTodo = () => {
    debugger
    if (todo==='') {
      toast.error("Please Add The Task First");

    }else{
      const newTodo = {
        text: todo,
        id: nanoid(),
      };
      dispatch(addTodo(newTodo));
      setTodo('');
    }
  };

  return (
    <div>
            <ToastContainer />

      <div className='shadow-lg p-3 mt-5 w-2/3 border m-auto bg-LightBrown'> 
      <h2 className='font-bold text-xl text-Black'>Todo List</h2>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
         placeholder="Enter a new task"
        className="border border-LightGreen w-4/6 p-2 rounded"
      />
      <button className="bg-LightGreen   w-1/5 m-6   text-white p-2 rounded" onClick={handleTodo}>
        Submit
      </button>
     
      <div className="todoListDiv">
      {todos.length === 0 ? (
            <p className="text-center text-gray-500">No tasks to show!</p>
          ) : (
        <ul className="list-disc list-inside  p-auto">
          {todos.map((todo, index) => (
            <li key={todo.id} className="flex justify-between border-b-2 border-LightGreen w-4/6 text-left font-bold	 text-black m-auto">
              <span  className="before:content-['•'] before:mr-2"> 
               {todo.text}
               </span>
               <button
                onClick={() => dispatch(deleteToDo({ id: todo.id }))}
                className="text-red-500 ml-4"
              >
                X
              </button>
            </li>
          ))}
        </ul>
          )
}
       
      </div>
    </div>
    </div>
  );
}

export default TodoList;
