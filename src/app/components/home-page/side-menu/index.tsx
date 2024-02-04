import React from 'react';
import SideNavLink from './side-menu-item'
import ThemeToggle from './toggle-button';

interface SideNavProps {
    className?: string;
}

const SideNav = ({ className }: SideNavProps) => {
    return (
        <nav
            id="sidenav-8"
            className={`absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800 ${className}`}
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-position="absolute"
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
                        <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-3.5 w-3.5"
                            >
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </span>
                        Home Page
                    </SideNavLink>}
                </li>
                <li className='relative pt-4'>
                    <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                        Input
                    </span>
                    <SideNavLink
                        href="#"
                        id="add_operators_btn"
                    >
                        <span
                            className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-3.5 w-3.5">
                                <path
                                    fillRule="evenodd"
                                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                    clipRule="evenodd" />
                                <path
                                    d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                            </svg>
                        </span>
                        <span>Network</span>
                    </SideNavLink>
                </li>
                <li className='relative'>
                    <SideNavLink
                        href="#"
                        id="depot_btn"
                    >
                        <span
                            className="mr-4 [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-3.5 w-3.5">
                                <path
                                    d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                                <path
                                    d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                                <path
                                    d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                                <path
                                    d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                            </svg>
                        </span>
                        <span>Depot</span>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                className="h-3.5 w-3.5">
                                <path
                                    fillRule="evenodd"
                                    d="M16.5,19.9C16.5,19.9,16.5,19.9,16.5,19.9l3.1-3.1c0,0,0,0,0,0l2.3-2.3c2.2,0.6,4.5,0,6.2-1.6c1.8-1.8,2.3-4.4,1.4-6.8   c-0.1-0.3-0.4-0.5-0.7-0.6c-0.3-0.1-0.7,0-0.9,0.3L25.6,8l-1.3-0.3L24,6.4l2.2-2.2c0.2-0.2,0.3-0.6,0.3-0.9   c-0.1-0.3-0.3-0.6-0.6-0.7c-2.3-0.9-5-0.4-6.8,1.4c-1.6,1.6-2.2,4-1.6,6.2l-1.6,1.6l-2.6-2.6L11,5.3c-0.1-0.1-0.2-0.3-0.3-0.3   L6.8,2.7C6.4,2.4,5.9,2.5,5.5,2.8L2.5,5.9C2.1,6.2,2.1,6.7,2.3,7.1L4.6,11c0.1,0.1,0.2,0.3,0.3,0.3l3.7,2.2l2.6,2.6l-1.2,1.2   c-2.2-0.6-4.5,0-6.2,1.6c-1.8,1.8-2.3,4.4-1.4,6.8c0.1,0.3,0.4,0.5,0.7,0.6c0.3,0.1,0.7,0,0.9-0.3L6.4,24l1.3,0.3L8,25.6l-2.2,2.2   c-0.2,0.2-0.3,0.6-0.3,0.9c0.1,0.3,0.3,0.6,0.6,0.7c0.8,0.3,1.5,0.4,2.3,0.4c1.6,0,3.3-0.6,4.5-1.9c1.6-1.6,2.2-4,1.6-6.2   L16.5,19.9z"
                                    clipRule="evenodd" />
                                <path
                                    d="M22.5,16.8l-6,6l6.1,6.1c0.8,0.8,1.9,1.3,3,1.3s2.2-0.4,3-1.3c0.8-0.8,1.3-1.9,1.3-3c0-1.1-0.4-2.2-1.3-3L22.5,16.8z" />
                            </svg>
                        </span>
                        <span>Under Development</span>
                    </SideNavLink>
                </li>
                <li className='relative pt-4'>
                    <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-primaryGold dark:text-lightBlue">
                        Dark Mode
                    </span>
                    <span className="flex items-center px-5 py-[0.6rem]">
                        <ThemeToggle />
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;