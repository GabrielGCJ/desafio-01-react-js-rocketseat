import styles from "./Header.module.css"

import todologo from "../../assets/todologo.svg"


export const Header = () => {

return (
    <div className={styles.header}>
        <img src={todologo} alt="" />
    </div>
)
}