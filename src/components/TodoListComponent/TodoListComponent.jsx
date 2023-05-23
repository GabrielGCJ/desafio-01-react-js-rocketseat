import styles from "./TodoListComponent.module.css"

export const TodoListComponent = () => {

    return (
        <div className={styles.todoList}>

            <div className={styles.todoInformation}>

                <div className={styles.textInformation}>
                    <strong>
                        <p className={styles.text1}>Tarefas Criadas</p>
                    </strong>  
                    <div className={styles.numberCreatedTodo}>
                        <p>10</p>                  
                    </div>
                </div>

                <div className={styles.textInformation}>
                    <strong>
                        <p className={styles.text2}>Tarefas Concluidas</p>                        
                    </strong>
                    <div className={styles.numberConcludedTodo}>
                        <p>3 de 10</p>
                    </div>
                </div>

            </div>

        </div>
    )
}