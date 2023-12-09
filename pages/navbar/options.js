import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Games.module.css';
export default function Options() {
    return (
        <div className={styles.navOptions}>
            {/* Assuming you have three logo images */}
            <Image src='/facebook-house.png' alt='house' width='20' height='20' />
            <Image src='/facebook-house.png' alt='house' width='20' height='20' />
            <Image src='/facebook-house.png' alt='house' width='20' height='20' />
            
        </div>
    );
};