import React from 'react'
import { useState } from 'react';

const App = () => {
const [inputValue, setinputValue] = useState("");

const [todos, setTodo] = useState([]);

function handleInput(event){
  setinputValue(event.target.value)
}

function handleFormSubmit (event){
     event.preventDefault()
}


  return (

         <div className="min-h-screen bg-blue-800 p-5 from-slate-900 via-slate-800 to-black flex flex-col items-center pt-16">
      
      <header className="text-5xl text-white font-bold">
        TO DO LIST✔️
      </header>

      <form onSubmit={handleFormSubmit} className="flex w-full max-w-md shadow-lg rounded-xl overflow-hidden m-5">
        <input
          type="text"
          placeholder="Enter your task..."
          className="flex-1 px-4 py-3 text-lg outline-none bg-white"
          value = {inputValue}
          onChange={handleInput}
        />

        <button
          type="submit"
          className="px-6 bg-red-400 text-white font-semibold hover:bg-green-400 transition duration-300"
        >
          Add TASK
        </button>
      </form>
    </div>
    )
    }
  

export default App
