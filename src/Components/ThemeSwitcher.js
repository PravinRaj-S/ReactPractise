import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeSwitcher = () =>{
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeSwitcher