import Link from 'next/link';
import navstyles from '../styles/Nav.module.css';
import React from 'react';

export const Nav = () => {
    return (
        <ul className={navstyles.nav}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    );
};

export default Nav;
