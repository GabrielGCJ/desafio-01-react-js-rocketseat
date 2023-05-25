import { useState } from "react"
import { Header } from "./components/Header/Header"
import { TodoAdditionComponent } from "./components/TodoAdditionComponent/TodoAdditionComponent"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoListComponent } from "./components/TodoListComponent/TodoListComponent"
import "./global.css"

import { v4 as uuidv4 } from 'uuid'

export const App = () => { 

  const [toDo, setToDo] = useState([
    {
      id: "1",
      text: "meu texto",
      isConcluded: "false",
      // createdAt: Date,
      // concludedAt: Date,
    },  
    {
      id: "2",
      text: "meu texto 2",
      isConcluded: "true",
      // createdAt: Date,
      // concludedAt: Date,
    },
    {
      id: "3",
      text: "meu texto 3",
      isConcluded: "true",
      // createdAt: Date,
      // concludedAt: Date,
    }
  ])

  const deleteTodo = (toDoToDelete) => {  

    const newToDo = toDo.filter(todo => todo.text !== toDoToDelete);

    setToDo(newToDo)
  }

  const handleCreateNewToDo = () => {
    event.preventDefault()

    const newTodoText = event.target.addtodo.value

    setToDo([...toDo, {
      id:uuidv4(),
      text: newTodoText,
      isConcluded: "false"
    }])

    // setToDo([...toDo,  newTodoText ])

    // setNewCommentText("")

    // console.log(event.target.addtodo)
    // console.log(event.target.addtodo.value)
}

  return (

    <div>
      <Header />

      <TodoAdditionComponent 
        handleCreateNewToDo={handleCreateNewToDo}
      
      />

      <TodoListComponent
        numberOfToDo={toDo.length} 
      />

      {toDo.map(toDo => {
        return (
          <TodoItem
            key={toDo.id}
            text={toDo.text}
            isConcluded={toDo.isConcluded}
            deleteTodo={deleteTodo}
          />
        )
      })}

    </div>
  )
}
