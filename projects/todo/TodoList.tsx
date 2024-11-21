import { TaskItem } from "./TaskItem"

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[]
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

export const TaskList = ({ tasks, toggleTask, deleteTask }: TaskListProps) => {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  )
}
