import TodoItem from './TodoItem';
export const TodoList = ({ TodoItems }) => {
    List<TodoItem> tasks;
    TodoItems.map((task) => tasks.append(new TodoItem(task)));
           
  return (
    <>
        <h1>Todo List</h1>
        <ul>
            {tasks.map((task, index)=>  (<TodoItem key={index} task={task} />))}
        </ul>
    </>
    );
}