import React, { useRef } from "react";


const InputFocus = () => {

    const InputRef = useRef(null)

    const focusInput = () => {
        InputRef.current.focus()
    }

    return (
        <div>
            <input ref={InputRef} type="text" placeholder="Type Something here"></input>
            <button onClick={focusInput} type="button">Focus The Input Button</button>
        </div>
    )
}

export default InputFocus