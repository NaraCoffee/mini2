import Header from "./component/Header"
import TodoEditor from "./component/TodoEditor"
import TodoList from "./component/TodoList"
import './App.css'
import { useState, useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "볼펜",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "휴대폰",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "지갑",
    date: new Date().getTime()
  },
  {
    id: 3,
    isDone: false,
    content: "이어폰",
    date: new Date().getTime()
  },
  {
    id: 4,
    isDone: false,
    content: "헤드폰",
    date: new Date().getTime()
  }
]


function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(5)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId, updates) => {

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == targetId
          ? { ...todo, ...updates }
          : todo
      )
    )

  }

  const onDelete=(targetId)=>{
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  }
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
