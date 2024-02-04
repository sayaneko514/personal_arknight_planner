import { useTheme } from '~/contexts/theme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    // This function will be called when the toggle is clicked
    const handleToggle = () => {
        toggleTheme(theme === 'default' ? 'dark' : 'default');
    };



    return (
        <label htmlFor="darkSwitch" className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    id="darkSwitch"
                    type="checkbox"
                    className="sr-only"
                    checked={theme === 'dark'}
                    onChange={handleToggle} // Use the handleToggle function here
                />
                <div className={`block w-10 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-primaryBlue' : 'bg-secondary'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${theme === 'dark' ? 'translate-x-4' : ''}`}></div>
            </div>
        </label>
    );
};

export default ThemeToggle;
