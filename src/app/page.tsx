"use client"

import AddTodo from "@/conponents/AddTodo"
import TodoFilter from "@/conponents/TodoFilter"
import TodoItem from "@/conponents/TodoItem"
import Todolist from "@/conponents/Todolist"
import { useState } from "react"
import { Todo } from "@/types"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>("all")
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case "all":
        return todos
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todolist todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></Todolist>
      <TodoFilter filter={filter} setFilter={setFilter}></TodoFilter>
    </div>

  )
}
