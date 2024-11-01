import React from "react"


export const Element = ({name, styles}) => {
    return <h2 style={styles}>My Name is {name}</h2>
}
  
export const SecondElement = ({name, styles}) => {
    return (
        <>
            <h1>This is the First Component</h1>
            <Element name = {name} styles = {styles} />
        </>
    )
}