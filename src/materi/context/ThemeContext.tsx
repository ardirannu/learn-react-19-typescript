import { createContext, ReactNode, useState } from "react"

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    changeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light')

    const changeTheme = () => {
        setTheme(prev => prev === 'light'? 'dark' : 'light')
        document.body.classList.toggle('dark')
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}