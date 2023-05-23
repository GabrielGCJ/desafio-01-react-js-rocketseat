import { Header } from "./components/Header/Header"
import { TodoAdditionComponent } from "./components/TodoAdditionComponent/TodoAdditionComponent"
import { TodoListComponent } from "./components/TodoListComponent/TodoListComponent"
import "./global.css"

export const App = () => {

  return (
    <div>
        <Header/>
        <TodoAdditionComponent/>
        <TodoListComponent/>
    </div>
  )
}
