import { useState } from 'react';
import TodoItem from '../Todoitem/Todoitem.jsx';

export const TodoList = ({ TodoItems=["ללמוד React", "לעשות קניות", "לתרגל קוד"] }) => {
    const [tasks, setTasks] = useState(TodoItems);
    const [inputValue, setInputValue] = useState("");
           
  return (
    <>
        <h1>Todo List</h1>
        <ul>
            {tasks.map((task, index)=>  (<TodoItem key={index} task={task} />))}
        </ul>
        <form onSubmit={(e) => {
            e.preventDefault();
            const trimmedValue = inputValue.trim();
            if (!trimmedValue || tasks.includes(trimmedValue))
                  return;
            setTasks([...tasks, trimmedValue]);
            setInputValue("");
        }}>
            <input type="text" placeholder="הקלידי משימה חדשה..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">אישור</button>
        </form>
    </>
    );
}
export default TodoList;