import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
  interface Todo {
    id: number
    title: string
    completed: boolean
  }

  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`ID:${id} - Title:${title} - Completed:${completed}`)
  }

  logTodo(id, title, completed)
})
