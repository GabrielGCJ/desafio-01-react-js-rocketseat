/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

import { Header } from "./components/Header/Header"
import { TodoAdditionComponent } from "./components/TodoAdditionComponent/TodoAdditionComponent"
import { TodoListComponent } from "./components/TodoListComponent/TodoListComponent"
import { NoTodoComponent } from "./components/NoTodoComponent/NoTodoComponent"
import { TodoItem } from "./components/TodoItem/TodoItem"

import "./global.css"

import { v4 as uuidv4 } from 'uuid'

export const App = () => {

  const [toDo, setToDo] = useState([
    {
      id: "1",
      text: "meu texto",
      isConcluded: "false"
    },
    {
      id: "2",
      text: "meu texto 2",
      isConcluded: "true"
    },
    {
      id: "3",
      text: "meu texto 3",
      isConcluded: "true"
    }
  ])

  const [countCompletedToDo, setCountCompletedToDo] = useState(2)


  const editTodoConcluded = (editTodo) => {

    let objeto = toDo.find(obj => obj.id === editTodo);

    if (objeto) {
      if (objeto.isConcluded === "false") {
        objeto.isConcluded = "true";
      }
      else if (objeto.isConcluded === "true") {
        objeto.isConcluded = "false";
      }
    }

    setToDo([...toDo])
  };

  const editCountCompletedToDo = () => {
    let count = 0;

    toDo.map(todo => {
      if (todo.isConcluded === "true") {
        count += 1;
      }
    });

    setCountCompletedToDo(count);

    return count
  }  

  const deleteTodo = (toDoToDelete) => {

    const newToDo = toDo.filter(todo => todo.id !== toDoToDelete);

    setToDo(newToDo)
  }

  

  const handleCreateNewToDo = (newTodoText) => {   

    setToDo([...toDo, {
      id: uuidv4(),
      text: newTodoText,
      isConcluded: "false"
    }])
  }

  useEffect(() => {editCountCompletedToDo()}, [deleteTodo, handleCreateNewToDo])

  const numberOfToDo = toDo.length  

  return (

    <div>
      <Header />

      <TodoAdditionComponent
        handleCreateNewToDo={handleCreateNewToDo}

      />

      <TodoListComponent
        numberOfToDo={numberOfToDo}
        countCompletedToDo={countCompletedToDo}
      />

      { numberOfToDo === 0 ? <NoTodoComponent /> :
      
        toDo.map(toDo => {
          return (
            <TodoItem
              id={toDo.id}
              key={toDo.id}
              text={toDo.text}
              isConcluded={toDo.isConcluded}
              deleteTodo={deleteTodo}
              editTodoConcluded={editTodoConcluded}
              editCountCompletedToDo={editCountCompletedToDo}
            />
          )
        })
      }

    </div>
  )
}
