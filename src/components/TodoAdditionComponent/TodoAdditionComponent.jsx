import React, { useState } from 'react';
import styles from "./TodoAdditionComponent.module.css"

export const TodoAdditionComponent = ({ handleCreateNewToDo }) => {
    
    const [newToDoText, setNewToDoText] = useState("");

    const handleNewToDoChange = (event) => {

        setNewToDoText(event.target.value);        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(newToDoText)

        setNewToDoText("")
    }

    return (
        <form className={styles.toDoForm} 
        onSubmit={handleCreateNewToDo}>
            <textarea
                name="addtodo"
                placeholder="Adicione uma nova tarefa"
                value={newToDoText}
                required={true}
                onChange={handleNewToDoChange}
            />

            <footer>
                <button type="submit">
                    Criar
                </button>
            </footer>
        </form>
    )
}