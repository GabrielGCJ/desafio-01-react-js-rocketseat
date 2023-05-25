import { NoTodoComponent } from "../NoTodoComponent/NoTodoComponent"
import { TodoItem } from "../TodoItem/TodoItem"
import styles from "./TodoListComponent.module.css"

export const TodoListComponent = (props) => {

    return (

        <div className={styles.todoListContainer}>

            <div className={styles.todoList}>

                <div className={styles.todoInformation}>

                    <div className={styles.textInformation}>

                        <strong>
                            <p className={styles.text1}>Tarefas Criadas</p>
                        </strong>

                        <div className={styles.numberCreatedTodo}>
                            <p>{props.numberOfToDo}</p>
                        </div>
                    </div>

                    <div className={styles.textInformation}>

                        <strong>
                            <p className={styles.text2}>Tarefas Concluidas</p>
                        </strong>

                        <div className={styles.numberConcludedTodo}>
                            <p>n de {props.numberOfToDo}</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/> */}
            

            {/* <NoTodoComponent /> */}
        </div>
    )
}