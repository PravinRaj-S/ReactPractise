import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice"


const ReduxApp = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    )
}

export default ReduxApp