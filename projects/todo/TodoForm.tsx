import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

interface TaskFormProps {
  newTask: string
  setNewTask: (task: string) => void
  addTask: (e: React.FormEvent) => void
}

export const TaskForm = ({ newTask, setNewTask, addTask }: TaskFormProps) => {
  return (
    <form onSubmit={addTask} className="flex mb-4">
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow mr-2"
      />
      <Button type="submit" className="flex items-center">
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </form>
  )
}
