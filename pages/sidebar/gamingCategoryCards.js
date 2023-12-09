import Image from "next/image"
import styles from '../../styles/Games.module.css'
export default function GamingCategory({ icon, name }) {
    return (
        <div className={styles.gameCategory}>
            <div>
            <Image src="/facebook-house.png" width="20" height="20" />
            </div>
            <div>
                <h3>{name}</h3>
            </div>            
        </div>
    )
}