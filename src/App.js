import React from "react"
import { ThemeProvider } from "./Context/ThemeContext"
import ThemeSwitcher from "./Components/ThemeSwitcher"

const App = () => {
    
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    )
}

export default App