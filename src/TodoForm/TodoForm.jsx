import { useState } from "react";

const TodoForm = ({ func }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();//מה זה עושה? מונע את פעולת ברירת המחדל של הטופס, שהיא רענון הדף בעת שליחה
    func(inputValue); 
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="הקלידי משימה חדשה..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">אישור</button>
    </form>
  );
};

export default TodoForm;