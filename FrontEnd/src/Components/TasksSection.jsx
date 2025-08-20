import React from 'react'
import { useState } from 'react'

function TasksSection() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()){
      setTasks([...tasks, {id: Date.now(), text:input, completed:false}])
      setInput('')
    }
  }

  return (
    <div className='bg-neutral-700 m-10 p-5 rounded-xl'>
        <div className='lg:flex justify-between mr-5'>
            <div className='pl-3'>
                <h1 className='text-8xl'>Today</h1>
                <h1 className='text-xl pl-5 pt-1 text-neutral-400'>Tasks Remaining: 5</h1>
            </div>
            <div className='lg:text-5xl text-3xl lg:pt-0 pt-5 flex pr-5'>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Add a Task' className='border-amber-500 rounded-l-xl border py-2 focus:outline-none focus:outline-neutral-100 focus:ring-1 pl-5' />
                <button onClick={addTask} className='px-5 border rounded-r-lg border-amber-500 bg-amber-500  hover:bg-orange-500 hover:border-orange-500 cursor-pointer'>➕</button>
            </div>
        </div>
        <ul className='space-y-2'>
          {
            tasks.map((task) =>(
              <li key={task.id} className='text-xl'>
                <input type='checkbox' checked={task.completed} 
                onChange={() =>{
                  setTasks(
                    tasks.map((t) => (
                      t.id === task.id ? {...t, completed: !t.completed} : t
                    ))
                  )
                }} />
                <span className={`flex-grow ${task.completed ? 'line-through text-neutral-500': 'text-neutral-50'}`}>{task.text}</span>
                <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default TasksSection