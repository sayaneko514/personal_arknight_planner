import React from 'react';

interface SideNavLinkProps {
    href: string;
    id: string;
    children: React.ReactNode;
}

const SideNavLink = ({ href, id, children }: SideNavLinkProps) => {
    return (
        <a
            href={href}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-lightBlue outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-primaryBlue dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            id={id}
        >
            {children}
        </a>
    );
};

export default SideNavLink;