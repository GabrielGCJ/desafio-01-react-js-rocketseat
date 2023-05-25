// import { useState } from "react"
// import styles from "./TodoAdditionComponent.module.css"

// export const TodoAdditionComponent = ({handleCreateNewToDo}) => {

//     // const [newCommentText, setNewCommentText] = useState("")

//     // const handleNewCommentChange = () => {
//     //     event.target.setCustomValidity("")

//     //     setNewCommentText(event.target.value)
//     // }
// const [newTododo, setNewTododo] = useState("")

// const text123 = () => {
//     console.log(event.target.newToDoText)
// }

//     return(
//         <form className={styles.toDoForm}>
//             <textarea 
//                 name="add-todo" 
//                 placeholder="Adiciona uma nova tarefa" 
//                 value={newToDoText}
//                 required={true}
//                 onChange={text123}

//             />

//             <footer>
//                 <button
//                     type="submit"
//                 >
//                     Criar
//                 </button>
//             </footer>
//         </form>
//     )
// }













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