import { useEffect } from "react";
import { useRef, useState } from "react";
import "./TodoTask.module.css";
import { Task } from "@prisma/client";

interface TodoTaskProps {
    task: Task
    onChange: (newTask: Task) => void,
    onDelete: () => void,
}

export const TodoTask: React.FC<TodoTaskProps> = ({ task, onChange, onDelete }) => {
    const [editModeEnabled, setEditModeEnabled] = useState<boolean>(false);
    const [newTaskTitle, setNewTaskTitle] = useState<string>(task.title);
    const editField = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (editModeEnabled) {
            editField.current?.focus();
        }
    }, [editModeEnabled]);

    const onCheckboxClicked = () => {
        onChange({
            done: !task.done,
            id: task.id,
            title: task.title,
        });
    };

    const onEditEnable = () => {
        setNewTaskTitle(task.title);
        setEditModeEnabled(true);
    }

    const onEditSubmit = () => {
        onChange({
            done: task.done,
            id: task.id,
            title: newTaskTitle,
        });
        setEditModeEnabled(false);
    }

    const onEditKey = (e) => {
        if (e.key == "Enter") {
            onEditSubmit()
        } else if (e.key == "Escape") {
            setEditModeEnabled(false);
        }
    }

    const nonEditableContent =
        <>
            <span className="task-edit">{task.title}</span>
            <button onClick={onEditEnable}>Edit</button>
            <button onClick={() => onDelete()}>Delete</button>
        </>;

    const editableContent =
        <>
            <input className="task-edit" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} onKeyUp={onEditKey} ref={editField} />
            <button onClick={() => setEditModeEnabled(false)}>Cancel</button>
            <button onClick={onEditSubmit}>Save</button>
        </>;

    return <span className="task-line">
        <input type="checkbox" checked={task.done} onChange={onCheckboxClicked} />
        {editModeEnabled ? editableContent : nonEditableContent}
    </span>
}