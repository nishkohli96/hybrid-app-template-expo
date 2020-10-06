import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme } from '../assets/themes/DarkTheme';
import { LightTheme } from '../assets/themes/LightTheme';

export const ThemeToggleContext = React.createContext();

const AppThemeContext = ({ children }) => {
    const [currentTheme, setTheme] = React.useState('dark');

    const themeToggle = (newTheme) => {
        setTheme(newTheme);
    };

    const Theme = ({ children }) => {
        const newTheme = currentTheme === 'light' ? LightTheme : DarkTheme;

        return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
    };

    return (
        <ThemeToggleContext.Provider
            value={{ theme: currentTheme, changeTheme: themeToggle }}
        >
            <Theme>{children}</Theme>
        </ThemeToggleContext.Provider>
    );
};

export default AppThemeContext;
