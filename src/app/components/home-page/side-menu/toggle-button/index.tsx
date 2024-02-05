import { useEffect, useState } from 'react';
import { useTheme } from '~/contexts/theme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    // This function will be called when the toggle is clicked
    const handleToggle = () => {
        toggleTheme();
    };

    // Effect to sync toggle state with theme
    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <label htmlFor="darkSwitch" className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    id="darkSwitch"
                    type="checkbox"
                    className="sr-only"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div className={`block w-10 h-6 rounded-full transition-colors ${isDarkMode ? 'bg-primaryBlue' : 'bg-secondary'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isDarkMode ? 'translate-x-4' : ''}`}></div>
            </div>
        </label>
    );
};

export default ThemeToggle;
