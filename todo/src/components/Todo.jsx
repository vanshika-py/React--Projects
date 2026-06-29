import React from 'react'


const Todo = () => {
const [inputValue, setinputValue] = useState("");



  return (

         <div className="min-h-screen bg-blue-800 p-5 from-slate-900 via-slate-800 to-black flex flex-col items-center pt-16">
      
      <header className="text-5xl text-white font-bold">
        TO DO LIST
      </header>

      <form className="flex w-full max-w-md shadow-lg rounded-xl overflow-hidden m-5">
        <input
          type="text"
          placeholder="Enter your task..."
          className="flex-1 px-4 py-3 text-lg outline-none bg-white"
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
