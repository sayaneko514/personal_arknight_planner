import Link from 'next/link';
import React from 'react';

interface SideNavLinkProps {
    href: string;
    id: string;
    children: React.ReactNode;
}

const SideNavLink = ({ href, id, children }: SideNavLinkProps) => {
    return (
        <Link
            href={href}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.6rem] text-[0.9rem] text-primary outline-none transition duration-300 ease-linear hover:bg-secondary hover:text-tertiary hover:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-primaryBlue dark:hover:text-lightBlue"
            id={id}
        >
            {children}
        </Link>
    );
};

export default SideNavLink;