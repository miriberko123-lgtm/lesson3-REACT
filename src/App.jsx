import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { TodoItem } from './Todoitem/Todoitem.jsx'
import { TodoList } from './TodoList/TodoList.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <TodoList TodoItems={[{ id: 1, task: " MIRI", status: false }, { id: 2, task: "TO DO HOMEWORK", status: true }, { id: 3, task: "לשטוף כלים", status: true }]} />
    </>
  )
}

export default App
