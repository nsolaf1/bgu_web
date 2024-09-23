import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, CheckCircle, ListTodo, PlusCircle, User } from "lucide-react"

interface Task {
  id: number
  title: string
  completed: boolean
}

export default function Component() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Review code changes", completed: true },
    { id: 3, title: "Update documentation", completed: false },
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Todoits</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300">John Doe</span>
            <User className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Manage your todo list</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={addTask} className="flex space-x-2 mb-4">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button type="submit">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add
                </Button>
              </form>
              <div className="space-y-4">
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Label
                      htmlFor={`task-${task.id}`}
                      className={task.completed ? 'line-through text-gray-500' : ''}
                    >
                      {task.title}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ListTodo className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Total Tasks</span>
                  </div>
                  <span className="font-bold">{totalTasks}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Completed</span>
                  </div>
                  <span className="font-bold">{completedTasks}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Task
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CalendarDays className="mr-2 h-4 w-4" /> View Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}