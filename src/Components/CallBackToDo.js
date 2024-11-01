import { memo } from "react"

const CallBackTodo = ({todos, addTodo}) => {
    console.log("child renders");
    
    return (
        <>
            <h1>My ToDo List</h1>
            {
                todos.map((todo, index) => {
                    return <p key={index} >{todo}</p>
                })
            }
            <button onClick={addTodo} type="button">Add Todo</button>
        </>
    )
}

export default memo(CallBackTodo)