import Link from "next/link";
import styles from '../../styles/Inbox.module.css';
import Notification from '../notification';
import Menu from "../menu";

const notificationArray = [
    { username: "SkyWalker92", notification: "New message received! 📬" },
    { username: "LunaExplorer", notification: "You've got a friend request! 🤝" },
    { username: "PixelMaster", notification: "Your photo is trending! 📸" },
    { username: "QuantumCoder", notification: "Code review completed! ✨" },
    { username: "OceanDreamer", notification: "Event invitation sent! 🎉" },
    { username: "CosmicGamer", notification: "Game challenge accepted! 🎮" },
    { username: "WildNature", notification: "Nature adventure awaits! 🌳" },
    { username: "MysticChef", notification: "New recipe shared! 🍲" },
    { username: "TechInnovator", notification: "Innovation alert! 💡" },
    { username: "StarGazer", notification: "Starry night observation scheduled! ✨" }
]

export default function Notifications() {
    const displayNotificationArray = notificationArray.map((notification, idx) => {
        return <Notification username={notification.username} message={notification.notification} key={idx} />
    })

    return (
        <div className={styles.container}>
            <Menu />
            <h1>Notifications</h1>

            <div className={styles.grid}>
                {displayNotificationArray}
            </div>
        </div>
    )
}