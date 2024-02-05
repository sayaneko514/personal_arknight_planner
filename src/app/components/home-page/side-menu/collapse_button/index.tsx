import React from 'react';
import { FaBars } from 'react-icons/fa';

interface CollapseButtonProps {
    toggleSidebar: () => void;
}

const CollapseButton: React.FC<CollapseButtonProps> = ({ toggleSidebar }) => {
    return (
        <button
            onClick={toggleSidebar}
            className="fixed top-5 right-[4rem] h-8 w-8 flex items-center justify-center hover:bg-white dark:hover:bg-primary bg-white bg-opacity-80 dark:bg-primary dark:bg-opacity-80 text-primaryGold dark:text-primaryBlue hover:text-secondaryGold dark:hover:text-lightBlue rounded-md shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:hidden"
        >
            <FaBars size={20} />
        </button>
    );
};

export default CollapseButton;
