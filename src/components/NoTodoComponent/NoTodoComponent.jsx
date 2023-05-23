import styles from "./NoTodoComponent.module.css"

export const NoTodoComponent = () => {
    return (
        <div className={styles.noTodoComponentContainer}>
            <div className={styles.noTodoComponent}>
                <div>
                    <p>img</p>
                </div>
                <div>
                    <strong>
                        <p>Você ainda não tem tarefas cadastradas</p>
                    </strong>
                    <p>Crie tarefas e organize seu itens a fazer</p>
                </div>

            </div>
        </div>
    )
}