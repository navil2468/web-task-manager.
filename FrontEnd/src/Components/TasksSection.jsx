import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function TasksSection() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    fetchTasks()
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tasks');
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async () => {
    if (input.trim()) {
      try {
        const res = await axios.post('http://localhost:5000/tasks', { title: input });
        setTasks([...tasks, res.data]);
        setInput('');
      } catch (err) {
        console.error(err);
      }
    }
  };
  const toggleTask = async (id, completed) => {
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed });
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      addTask();
    }
  }

  return (
    <div className='bg-neutral-700 m-10 p-5 rounded-xl'>
        <div className='lg:flex justify-between'>
            <div className='pl-3'>
                <h1 className='text-8xl'>Today</h1>
                <h1 className='text-2xl pl-5 pt-1 text-neutral-400'>Tasks Remaining: 5</h1>
            </div>
            <div className='lg:text-5xl text-3xl lg:pt-0 pt-5 flex pr-5'>
            <input value={input} onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Add a Task' className='border-amber-500 rounded-l-xl border py-2 focus:outline-none focus:outline-neutral-100 focus:ring-1 pl-5' />
                <button onClick={addTask} className='px-5 border rounded-r-lg border-amber-500 bg-amber-500  hover:bg-orange-500 hover:border-orange-500 cursor-pointer'>➕</button>
            </div>
        </div>
        {loading ? (
        <p className="text-white pl-8 mt-10">Loading tasks...</p>
        ) : (
        <ul className='mt-10 space-y-5 mx-10'>
          {
            tasks.map((task) =>(
              <li key={task.id} className='flex items-center justify-between text-5xl text-neutral-800 bg-neutral-400 rounded-xl pl-5 py-5'>
                <div className="flex items-center gap-4">
                  <input 
                    type='checkbox' 
                    checked={task.completed}
                    className="w-6 h-6 accent-amber-500"
                    onChange={() => {
                      setTasks(
                        tasks.map((t) => (
                          t.id === task.id ? {...t, completed: !t.completed} : t
                        ))
                      )
                    }} 
                  />
                  <span className={`${task.completed ? 'line-through text-neutral-500': 'text-neutral-800'}`}>
                    {task.text}
                  </span>
                </div>
                <button className='pr-5' onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="bg-neutral-200 rounded-2xl w-10 h-10 hover:bg-neutral-50 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21
                        c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673
                        a2.25 2.25 0 0 1-2.244 2.077H8.084
                        a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79
                        m14.456 0a48.108 48.108 0 0 0-3.478-.397
                        m-12 .562c.34-.059.68-.114 1.022-.165
                        m0 0a48.11 48.11 0 0 1 3.478-.397
                        m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201
                        a51.964 51.964 0 0 0-3.32 0
                        c-1.18.037-2.09 1.022-2.09 2.201v.916
                        m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                    />
                  </svg>
                </button>
              </li>
            ))
          }
        </ul>
        )}
    </div>
  )
}

export default TasksSection