import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Inbox.module.css';
import News from './news';
import Daniel from './avatars/daniel';
import Keya from './avatars/keya';
import Rome from './avatars/rome';
import Mike from './avatars/mike';
import Rodrigo from './avatars/rodrigo'
// data
const engineersArray = [
    { username: '@Keya-Moradi', message: "Let's go get some mushrooms!! For CULINARY purposes of vourse", image: <Keya /> },
    { username: '@dfloresca', message: 'Tell me what you eat and I shall tell you what you are - Brillat Savarin', image: <Daniel /> },
    { username: '@soyrvelez', message: 'Who got Daniel talking about food again; oh man', image: <Rodrigo /> },
    { username: '@mike-gustafson', message: 'I think it was Keya', image: <Mike /> },
    { username: '@romebell', message: 'So much noise today', image: <Rome />}
]

export default function Newsfeed() {
    const displayEngineersArray = engineersArray.map((engineer, idx) => {
        return <News image={engineer.image} username={engineer.username} message={engineer.message} key={idx} />
    });

    return (    
            <div className={styles.grid}>
                {displayEngineersArray}
            </div>
    )
}