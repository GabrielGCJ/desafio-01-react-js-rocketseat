import { useState } from "react";
import styles from "./TodoItem.module.css"
import { Circle, CheckCircle, Trash } from "phosphor-react";
import concludedTrue from "../../assets/concludedTrue.svg"
import concludedFalse from "../../assets/concludedFalse.svg"


export const TodoItem = () => {

    const [concluded, setConcluded] = useState("false")

    const editConcluded = () => {
        if (concluded === "false") {
            setConcluded("true")
        } 
        else { setConcluded("false")  }
    }

    return (
        <div className={styles.containerTodoItem}>

            <div className={styles.todoItem}>
                <button
                    concluded={concluded}
                    className={styles.circle}
                    onClick={editConcluded} >

                    {concluded === "true" ? (<img src={concludedTrue} alt="concludedTrue" />) : (<img src={concludedFalse} alt="concludedFalse" />)}

                </button>

                <p>Em meio às adversidades da vida, lembre-se sempre de que cada obstáculo é uma oportunidade disfarçada de crescimento. Você é capaz de superar qualquer desafio que surgir em seu caminho, desde que mantenha a chama da determinação acesa em seu coração</p>

                <button className={styles.trash}><Trash size={20} /></button>

            </div>

        </div>
    )
}