import { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({
    children
}) => {
    const [isDarkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode
        setDarkMode(newDarkMode)
        localStorage.setItem('darkMode', newDarkMode.toString())

        // Apply 'dark-theme' class to body element
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error('useDarkMode must be used within a DarkModeProvider')
    return context
}