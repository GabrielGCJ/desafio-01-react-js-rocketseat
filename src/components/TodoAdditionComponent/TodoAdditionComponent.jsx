import React, { useState } from 'react';

import plus from "../../assets/plus.svg"

import styles from "./TodoAdditionComponent.module.css"

export const TodoAdditionComponent = ({ handleCreateNewToDo }) => {
    
    const [newToDoText, setNewToDoText] = useState("");

    const handleNewToDoChange = (event) => {

        event.target.setCustomValidity("")

        setNewToDoText(event.target.value);     
        
    }

    const handleCreateToDo = (event) => {
        event.preventDefault();

        handleCreateNewToDo(newToDoText)

        setNewToDoText("")
    }

    return (
        <form className={styles.toDoForm} 
        onSubmit={handleCreateToDo}>
            <textarea
                name="addtodo"
                placeholder="Adicione uma nova tarefa"
                value={newToDoText}
                required={true}
                onChange={handleNewToDoChange}
            />

            <footer>
                <button type="submit">
                   <strong>Criar</strong>  <img src={plus} alt="" />
                </button>
            </footer>
        </form>
    )
}