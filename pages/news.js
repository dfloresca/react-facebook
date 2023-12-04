import styles from '../styles/Inbox.module.css';

export default function News({ username, message, image }) {
    return (
        <div className={styles.card}>
            <h3>{username}</h3>
            {image}
            <h4>Post: {message}</h4>
        </div>
    )
}