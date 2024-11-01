import React, { useState } from 'react';
import ToDo from './ToDo';

export const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState(['todo 1', 'todo 2'])
  
    const increment = () => {
      setCount((c) => c + 1)
    }
  
    const decrement = () => {
      setCount((c) => c - 1)
    }
  
    return (
      <>  
        < ToDo todos={todo}  />
        <div>
            Count : {count}
            
            <hr />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
      </>
    )
  }