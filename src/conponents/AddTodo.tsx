import { useState } from "react"

interface AddTodoProps {
  addTodo: (text: string) => void
}
function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text === "") return
    setText("")
    addTodo(text)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo