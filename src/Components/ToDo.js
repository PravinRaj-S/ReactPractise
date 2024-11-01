import { memo } from "react"
import Styles from '../CSS/Index.module.css'

const Todo = ({todos}) => {
    console.log("child renders")

    return (
        <>
            <h2 className={Styles.firstClass}>My ToDos</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
        </>
    )
}

export default memo(Todo)