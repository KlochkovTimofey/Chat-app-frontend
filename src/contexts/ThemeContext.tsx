import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark"

interface IThemeValue {
    theme: Theme, 
    changeTheme: (t:Theme) => void
}

const ThemeContext = createContext<IThemeValue>({
    theme: "light",
    changeTheme(t:Theme) {
        
    }
})

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");
    function changeTheme(t:Theme) {
        setTheme(t);
    } 
    const value = {
        theme,
        changeTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
};