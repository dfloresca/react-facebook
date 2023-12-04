import styles from '../styles/Inbox.module.css';

export default function Notification({ username, message, image }) {
    return (
        <div className={styles.card}>
            <h3>{username}</h3>
            <h4>Notification: {message}</h4>
        </div>
    )
}