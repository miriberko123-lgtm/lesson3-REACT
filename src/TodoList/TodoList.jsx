import { useState } from 'react';
import TodoItem from '../Todoitem/Todoitem.jsx';
import TodoForm from '../TodoForm/TodoForm.jsx';
export const TodoList = ({ TodoItems=[] }) => {
    const [tasks, setTasks] = useState(TodoItems);
    const addTask = (newTask) => {
        const trimmedValue = newTask.trim();
        if (!trimmedValue || tasks.some((task) => task.task === trimmedValue)) return;
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: Date.now(), task: trimmedValue, status: false },
        ]);
    };

    const completeTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id ? { ...task, status: true } : task
            )
        );
    }

  return (
    <>
        <h1>Todo List</h1>
        <ul>
            {tasks.map((task, index)=>  (<TodoItem key={task.id ?? index} id={task.id} status={task.status} task={task.task} func={completeTask} />
        ))}
        
        </ul>
        <TodoForm func={addTask} />
    </>
    );
}
export default TodoList;