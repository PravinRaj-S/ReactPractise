import { useCallback, useMemo, useState } from "react"
import CallBackToDo from "./CallBackToDo"

export const UseCallbackApp = () => {

    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count), [count])


    const increaseCount = () => {
        setCount((count) => count + 1)
    }

    const addTodo = useCallback(() => {
        setTodo((td) => [...td, 'New Todo'])
    }, [todo])

    return (
        <div>
            <CallBackToDo todos={todo} addTodo={addTodo}/>
            <hr />
            <p>Count : {count}</p>
            <button onClick={increaseCount} type="button">+</button>
            <p>Calulation : {calculation}</p>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating....")

    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num    
}