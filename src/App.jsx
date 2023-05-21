import { Header } from "./components/Header/Header"
import { TodoAdditionComponent } from "./components/TodoAdditionComponent/TodoAdditionComponent"
import "./global.css"

export const App = () => {

  return (
    <div>
        <Header/>
        <TodoAdditionComponent/>
    </div>
  )
}
