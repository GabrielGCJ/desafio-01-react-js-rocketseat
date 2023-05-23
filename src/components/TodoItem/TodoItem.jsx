import styles from "./TodoItem.module.css"
import { Circle, Trash } from "phosphor-react";



export const TodoItem = () => {
    return (
        <div className={styles.containerTodoItem}>

            <div className={styles.todoItem}>
                <button className={styles.circle}><Circle size={22}/></button>
                    <p>Em meio às adversidades da vida, lembre-se sempre de que cada obstáculo é uma oportunidade disfarçada de crescimento. Você é capaz de superar qualquer desafio que surgir em seu caminho, desde que mantenha a chama da determinação acesa em seu coração</p>
                <button className={styles.trash}><Trash size={20} /></button>

            </div>
            
        </div>
    )
}