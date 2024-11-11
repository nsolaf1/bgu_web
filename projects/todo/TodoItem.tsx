import { Button } from "@/components/ui/button"
import { Trash2, Check } from "lucide-react"

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean }
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

export const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li 
      key={task.id} 
      className={`flex items-center justify-between p-2 rounded ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
    >
      <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
        {task.text}
      </span>
      <div>
        <Button
          onClick={() => toggleTask(task.id)}
          className="mr-2"
          variant="outline"
          size="icon"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <Check className={`w-4 h-4 ${task.completed ? 'text-green-500' : 'text-gray-500'}`} />
        </Button>
        <Button
          onClick={() => deleteTask(task.id)}
          variant="outline"
          size="icon"
          aria-label="Delete task"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </Button>
      </div>
    </li>
  )
}
