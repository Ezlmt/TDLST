import { Todo } from "@/types"
import TodoItem from "./TodoItem"

interface TodolistProps {
  todos: Array<Todo>
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
function Todolist({ todos, toggleTodo, deleteTodo }: TodolistProps) { 
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>

  )
}

export default Todolist