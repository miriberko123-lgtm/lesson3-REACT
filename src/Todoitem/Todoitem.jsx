export const TodoItem = ({ id, status, task,func }) => {
  const statusText = status ? "green" : "red";
  return (
    <li style={{ color: statusText }}>
      {task}
      {status || <button onClick={() => func(id)}>Complete</button>}
    </li>
  );
};
export default TodoItem;