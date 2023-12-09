import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href='/'>Return Home</Link>
            <Link href='/email/inbox'><Image src='/messenger.png' width='25' height='25'/>Messages</Link>
            <Link href='/alerts/notifications'><Image src='/notification.png' width='25' height='25'/>Notifications</Link>
        </div>
    )
}