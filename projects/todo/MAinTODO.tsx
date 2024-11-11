'use client'

import { useState } from 'react'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function TodoistClone() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedTask = newTask.trim()
    if (trimmedTask) {
      setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: trimmedTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todoist Clone</h1>
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  )
}
