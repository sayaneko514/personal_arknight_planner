"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Use state initialization function to only read localStorage once
    const [theme, setTheme] = useState<Theme>(() => {
        // Check if window is defined (which means running in browser)
        if (typeof window !== 'undefined') {
            // Get stored theme from localStorage or default to 'light'
            return (localStorage.getItem('theme') as Theme) || 'light';
        }
        // Default to 'light' if running on the server
        return 'light';
    });

    // Effect to apply the theme
    useEffect(() => {
        // Ensure code runs only in the browser
        if (typeof window !== 'undefined') {
            const html = document.documentElement;
            if (theme === 'dark') {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
    }, [theme]);

    // Effect to store theme changes
    useEffect(() => {
        // Ensure localStorage is available
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
