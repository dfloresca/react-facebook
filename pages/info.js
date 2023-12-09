import styles from '../styles/Inbox.module.css';

export default function Info({ username, message, image }) {
    return (
        <div className={styles.card}>
            <h3>{username}</h3>
            <h4>Post: {message}</h4>
        </div>
    )
}