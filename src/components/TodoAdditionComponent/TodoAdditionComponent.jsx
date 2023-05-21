import styles from "./TodoAdditionComponent.module.css"

export const TodoAdditionComponent = () => {

    return(
        <form className={styles.toDoForm}>
            <textarea 
                name="add-todo" 
                placeholder="Adiciona uma nova tarefa"  
            />

            <footer>
                <button>
                    Criar
                </button>
            </footer>
        </form>
    )
}