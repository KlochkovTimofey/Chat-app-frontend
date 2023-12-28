import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from "./Theme";

export const ThemeWrapper = ({children}:{children: React.ReactNode}) => {
    const {theme} = useTheme();
    const selectedTheme = theme == "light" ? lightTheme : darkTheme

    return (
    <ThemeProvider theme={selectedTheme}>
        {children}
    </ThemeProvider>
    )
}