import { useState } from "react";
import styles from "./TodoItem.module.css"
import { Trash } from "phosphor-react";
import concludedTrue from "../../assets/concludedTrue.svg"
import concludedFalse from "../../assets/concludedFalse.svg"


    export const TodoItem = ({id, text, isConcluded, deleteTodo, editTodoConcluded, editCountCompletedToDo}) => {

    const handleDeleteToDo = () => {
        deleteTodo(id)

        // console.log("teste 123")
    }

    const handleClick = () => {
        editTodoConcluded(id)
        editCountCompletedToDo()
    }



    return (
        <div className={styles.containerTodoItem}>

            <div className={styles.todoItem}>
                <button                    
                    onClick={ handleClick }  
                                     
                     >

                    {isConcluded === "true" ? (<img src={concludedTrue} alt="concludedTrue" />) : (<img src={concludedFalse} alt="concludedFalse" />)}

                </button>

                <p>{text}</p>

                <button 
                    className={styles.trash}><Trash 
                    size={20} 
                    onClick={handleDeleteToDo} 
                    title="Deletar ToDo " />
                </button>

            </div>

        </div>
    )
}