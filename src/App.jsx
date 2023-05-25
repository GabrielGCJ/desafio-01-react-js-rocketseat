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

  const [countCompletedToDo, setCountCompletedToDo] = useState(2)  
  

  const editTodoConcluded = (editTodo) => {

    const ToDoEdited = toDo.filter(todo => todo.text === editTodo);

    // console.log(ToDoEdited)


    let minhaArray = toDo


    minhaArray.map(item => {
      if (item === editTodo) {
        if (item.isConcluded === "false") {
          item.isConcluded = "true";
        } else {
          item.isConcluded = "false";
        }
      }
      return item;
    });  

    console.log(minhaArray)
  };

  const editCountCompletedToDo = () => {
    let count = 0;
  
    toDo.map(todo => {
      if (todo.isConcluded === "false") {
        count += 1;
      }
    });
  
    setCountCompletedToDo(count) ;
  }

  const deleteTodo = (toDoToDelete) => {

    const newToDo = toDo.filter(todo => todo.text !== toDoToDelete);

    setToDo(newToDo)
  }

  const handleCreateNewToDo = () => {
    event.preventDefault()

    const newTodoText = event.target.addtodo.value

    setToDo([...toDo, {
      id: uuidv4(),
      text: newTodoText,
      isConcluded: "false"
    }])    
  }

  return (

    <div>
      <Header />

      <TodoAdditionComponent
        handleCreateNewToDo={handleCreateNewToDo}

      />

      <TodoListComponent
        numberOfToDo={toDo.length}
        countCompletedToDo={countCompletedToDo}
      />

      {toDo.map(toDo => {
        return (
          <TodoItem
            key={toDo.id}
            text={toDo.text}
            isConcluded={toDo.isConcluded}
            deleteTodo={deleteTodo}
            editTodoConcluded={editTodoConcluded}
            editCountCompletedToDo={editCountCompletedToDo}
          />
        )
      })}

    </div>
  )
}
