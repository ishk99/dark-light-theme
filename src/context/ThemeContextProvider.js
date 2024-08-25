import ThemeContext from "./ThemeContext";
import {useContext, useEffect, useState} from 'react';

const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevState) => !prevState);
    }
    const theme = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    },[isDarkMode]) 

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;