import React from 'react'
import { useState } from 'react';

const Todo = () => {
const [inputValue, setinputValue] = useState("");

const [todotask, settodoTask] = useState([]);

const handleinputChange = (value) => {
  setinputValue(event.target.value)
}

const handleFormSubmit = (event) => {
     event.preventDefault()
}


if(!inputValue) return;

settodoTask((prevtask) => [...prevtask, inputValue]);



  return (

         <div className="min-h-screen bg-blue-800 p-5 from-slate-900 via-slate-800 to-black flex flex-col items-center pt-16">

      <header className="text-5xl text-white font-bold">
        TO DO LIST✔️
      </header>

      <form onSubmit={handleFormSubmit} className="flex w-full max-w-md shadow-lg rounded-xl overflow-hidden m-5">
        <input
          type="text"
          placeholder="Enter your task..."
          autoComplete='off'
          className="flex-1 px-4 py-3 text-lg outline-none bg-white"
          value = {inputValue}
          onChange ={(event) => handleinputChange(event.target.value)}
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
  

export default Todo
