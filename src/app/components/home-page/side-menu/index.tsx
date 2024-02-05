import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SideNavLink from './side-menu-item';
import ThemeToggle from './toggle-button';
import { FaHome, FaPlus, FaChessPawn, FaIdCard, FaDatabase, FaScrewdriver } from "react-icons/fa";
import CollapseButton from './collapse_button';
import LoginModal from '../../login-modal';

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

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="relative">
            {!isSidebarOpen && (
                <CollapseButton toggleSidebar={toggleSidebar} />
            )}

            <nav
                id="sidenav-8"
                className={`fixed top-0 left-0 z-40 flex flex-col h-screen w-60 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 overflow-y-auto bg-white shadow-xl dark:bg-zinc-800 ${className}`}
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-position="fixed"
                data-te-sidenav-accordion="true"
            >
                <Link href="/" className="mb-7 flex items-center justify-center border-b-2 border-solid border-primaryGold dark:border-darkBlue py-6 outline-none"
                    data-te-ripple-init
                    data-te-ripple-color="primary"
                >
                    <span className="text-primary hover:text-secondary dark:text-primaryBlue dark:hover:text-lightBlue">Rhode Island Module</span>
                </Link>
                <ul
                    className="relative m-0 list-none px-[0.5rem] pb-12 flex-grow overflow-y-auto"
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
                            href="/add-operators"
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
                                <FaChessPawn />
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
                <div className="w-full pt-6">
                    <button
                        className="flex items-center justify-center w-full h-10 px-4 text-sm font-medium text-white bg-primaryGold hover:text-tertiary hover:bg-secondaryGold dark:bg-primaryBlue dark:text-white dark:hover:bg-darkBlue dark:hover:text-inherit transition-colors duration-200 ease-in-out"
                        onClick={handleOpenModal}
                    >
                        <FaIdCard />
                        <span className="ml-2 text-sm font-medium">Account</span>
                    </button>
                </div>
            </nav>
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />

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