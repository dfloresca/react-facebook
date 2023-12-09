import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Games.module.css';
export default function FacebookLogo() {
    // Assuming you have a Facebook logo image
    return (
        <div className={styles.navLogo}>
            {/* <img src='../../public/facebooklogo.png' alt="Facebook Logo" /> */}
            <Image src='/facebooklogo.png' alt="Facebook Logo" width='20' height='20' />
        </div>
    );
};


        {/* <Image src='/engineer.png' alt='engineer' width='200' height='200'/> */}
