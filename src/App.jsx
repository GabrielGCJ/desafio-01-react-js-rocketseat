import { useState } from "react"
import { Header } from "./components/Header/Header"
import { TodoAdditionComponent } from "./components/TodoAdditionComponent/TodoAdditionComponent"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoListComponent } from "./components/TodoListComponent/TodoListComponent"
import "./global.css"

export const App = () => {

  const [toDo, setToDo] = useState([
    {
      id: "jygfikweuy",
      text: "meu texto",
      isConcluded: "false",
      // createdAt: Date,
      // concludedAt: Date,
    },  
    {
      id: "jygfrtwtikweuy",
      text: "meu texto 2",
      isConcluded: "true",
      // createdAt: Date,
      // concludedAt: Date,
    },
    {
      id: "jygfrtwthrtdhtrikweuy",
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



  return (
    <div>
      <Header />

      <TodoAdditionComponent />

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
