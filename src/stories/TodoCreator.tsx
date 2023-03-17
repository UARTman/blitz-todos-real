import { useState } from "react";
import "./TodoTask.module.css";

interface TodoCreatorProps {
    onSubmit: (string) => void
}

export const TodoCreator: React.FC<TodoCreatorProps> = ({ onSubmit }) => {
    const [newTitle, setNewTitle] = useState("");

    const clicked = () => {
        onSubmit(newTitle);
        setNewTitle("");
    }


    return (<div className="task-line">
        <input className="task-edit" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        <button onClick={clicked}>Add task</button>
    </div>);
}