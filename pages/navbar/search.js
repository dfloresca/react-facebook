import React from 'react';
import styles from '../../styles/Games.module.css'
export default function SearchBar() {
    return (
        <div className={styles.navSearch}>
            {/* Your search bar implementation */}
            <input type="text" placeholder="Search..." />
        </div>
    );
};
