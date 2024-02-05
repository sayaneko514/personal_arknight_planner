import React, { useState, useEffect } from 'react';
import SideNavLink from './side-menu-item';
import ThemeToggle from './toggle-button';
import { FaBars, FaHome, FaPlus, FaIdCard, FaDatabase, FaScrewdriver } from "react-icons/fa";
import CollapseButton from './collapse_button';

interface SideNavProps {
    className?: string;
}

const SideNav: React.FC<SideNavProps> = ({ className }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) { // Adjust this for 'lg' breakpoint
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative">
            {!isSidebarOpen && (
                <CollapseButton toggleSidebar={toggleSidebar} />
            )}

            <nav
                id="sidenav-8"
                className={`fixed top-0 left-0 z-40 h-screen w-60 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 overflow-y-auto bg-white shadow-xl dark:bg-zinc-800 ${className}`}
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-position="fixed"
                data-te-sidenav-accordion="true"
            >
                <a
                    href="/"
                    className="mb-7 flex items-center justify-center border-b-2 border-solid border-primaryGold dark:border-darkBlue py-6 outline-none"
                    data-te-ripple-init
                    data-te-ripple-color="primary"
                >
                    <span className="text-primary hover:text-secondary dark:text-primaryBlue dark:hover:text-lightBlue">Rhode Island Module</span>
                </a>
                <ul
                    className="relative m-0 list-none px-[0.5rem] pb-12"
                    data-te-sidenav-menu-ref
                >
                    <li className="relative">
                        {<SideNavLink
                            href="/"
                            id="home_btn"
                        >
                            <span className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaHome />
                            </span>
                            Home Page
                        </SideNavLink>}
                    </li>
                    <li className='relative pt-4'>
                        <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                            Add
                        </span>
                        <SideNavLink
                            href="#"
                            id="add_operators_btn"
                        >
                            <span
                                className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaPlus />
                            </span>
                            <span>Operators</span>
                        </SideNavLink>
                    </li>
                    <li className="relative">
                        <SideNavLink
                            href="#"
                            id="add_resources_btn"
                        >
                            <span
                                className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaPlus />
                            </span>
                            <span>Resources</span>
                        </SideNavLink>
                    </li>
                    <li className='relative pt-4'>
                        <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                            Profile
                        </span>
                        <SideNavLink
                            href="#"
                            id="collection_btn"
                        >
                            <span
                                className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaIdCard />
                            </span>
                            <span>Operators</span>
                        </SideNavLink>
                    </li>
                    <li className='relative'>
                        <SideNavLink
                            href="#"
                            id="depot_btn"
                        >
                            <span
                                className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaDatabase />
                            </span>
                            <span>Depot.</span>
                        </SideNavLink>
                    </li>
                    <li className='relative pt-4'>
                        <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                            Tools
                        </span>
                        <SideNavLink
                            href="#"
                            id="collection_btn"
                        >
                            <span
                                className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                                <FaScrewdriver />
                            </span>
                            <span>Under Development</span>
                        </SideNavLink>
                    </li>
                    <li className='relative pt-4'>
                        <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                            Dark Mode
                        </span>
                        <span className="flex items-center px-6 py-[0.6rem]">
                            <ThemeToggle />
                        </span>
                    </li>
                </ul>
            </nav>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default SideNav;