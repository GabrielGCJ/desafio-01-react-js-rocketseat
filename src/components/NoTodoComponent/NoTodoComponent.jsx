import styles from "./NoTodoComponent.module.css"
import clipboard from "../../assets/clipboard.svg"

export const NoTodoComponent = () => {
    return (
        <div className={styles.noTodoComponentContainer}>
            <div className={styles.noTodoComponent}>
                <div>
                    <img src={clipboard}/>
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