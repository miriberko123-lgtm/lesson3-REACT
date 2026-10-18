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
    
     <TodoList TodoItems={[" MIRI", "TO DO HOMEWORK", "לשטוף כלים"]} />
    </>
  )
}

export default App
