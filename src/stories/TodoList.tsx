import { Task } from "@prisma/client";
import { TodoTask } from "./TodoTask";
import "./TodoList.module.css";

interface TodoListProps {
    tasks: Task[],
    onTaskDelete: (id: number) => void,
    onTaskChange: (id: number, newTask: Task) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, onTaskChange, onTaskDelete }) => {
    return (<div className="todo-list">
        {tasks.map(task => {
            return (<TodoTask task={task} key={task.id}
                onChange={(t) => onTaskChange(task.id, t)} onDelete={() => onTaskDelete(task.id)} />)
        })}
    </div>);
}