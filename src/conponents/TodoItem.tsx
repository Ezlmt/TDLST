import { Todo } from "@/types"

interface TodoItem {
  todo: Todo
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItem) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem