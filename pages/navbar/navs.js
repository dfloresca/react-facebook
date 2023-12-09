import React from 'react';
import FacebookLogo from './logo';
import SearchBar from './search';
import Sections from './sections';
import Options from './options';
import styles from "../../styles/Games.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <FacebookLogo />
            <SearchBar />
            <Sections />
            <Options />
        </nav>
    );
};
