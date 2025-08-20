import React from 'react'

function TasksSection() {
  return (
    <div className='bg-neutral-700 m-5 p-5'>
        <div className='lg:flex justify-between'>
            <div className='pl-3'>
                <h1 className='text-8xl'>Today</h1>
                <h1 className='text-xl pl-5 pt-1 text-neutral-400'>Tasks Remaining: 5</h1>
            </div>
            <div className='lg:text-6xl text-3xl lg:pt-0 pt-5 flex'>
                <input type='text' placeholder='Add a Task' className='border-amber-500 rounded-l-xl border py-2 focus:outline-none focus:outline-neutral-100 focus:ring-1 pl-5'></input>
                <button className='border rounded-r-lg border-orange-200 bg-amber-500   hover:bg-amber-500 cursor-pointer'>➕</button>
            </div>
        </div>
    </div>
  )
}

export default TasksSection