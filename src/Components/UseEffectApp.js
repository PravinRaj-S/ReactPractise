import React, { useEffect, useState } from 'react';

export const UseEffectApp = () => {

    const [count, setCount] = useState(0)
  
    useEffect(()=>{
      setTimeout(() => {
        setCount((c) => c + 1)
      }, 1000)
    }, [])
  
    return <h1>I have Rendered {count} times!</h1>
  }