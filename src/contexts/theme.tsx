"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultTheme = 'default';
const ThemeContext = createContext({
    theme: defaultTheme,
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        // Load the stored theme from localStorage or default to 'default'
        const storedTheme = localStorage.getItem('theme') || defaultTheme;
        setTheme(storedTheme);
    }, []);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        // Apply or remove the dark class based on the theme
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
