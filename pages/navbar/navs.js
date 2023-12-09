import React from 'react';
import FacebookLogo from './logo';
import SearchBar from './search';
import Sections from './sections';
import Options from './options';
import styles from "../../styles/Games.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                <FacebookLogo />
                <SearchBar />
            </div>
            <div className={styles.navCenter}>
                <Sections />
            </div>
            <div className={styles.navRight}>
                <Options />
            </div>
        </nav>
    );
};
