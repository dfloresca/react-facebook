import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Inbox.module.css';
import Message from '../message';
import Daniel from '../avatars/daniel';
import Keya from '../avatars/keya';
import Rome from '../avatars/rome';
import Mike from '../avatars/mike';
import Rodrigo from '../avatars/rodrigo'
// data
const engineersArray = [
    { username: '@Keya-Moradi', message: 'Terzi', image: <Keya /> },
    { username: '@dfloresca', message: 'Dancing With The Stars', image: <Daniel /> },
    { username: '@soyrvelez', message: 'The Curse', image: <Rodrigo /> },
    { username: '@mike-gustafson', message: 'Monarch Legacy of Monsters', image: <Mike /> },
    { username: '@romebell', message: 'Peaky Blinders', image: <Rome />}
]

export default function Inbox() {
    const displayEngineersArray = engineersArray.map((engineer, idx) => {
        return <Message image={engineer.image} username={engineer.username} message={engineer.message} key={idx} />
    });

    return (
        <div className={styles.container}>
            <h1>Email Inbox</h1>
            
            <div className={styles.grid}>
                {displayEngineersArray}
            </div>

            <Link href="/">Return Home</Link>
        </div>
    )
}