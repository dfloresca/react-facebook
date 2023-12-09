import Gfeed from "./gaming/game-feed";
import Navbar from "./navbar/navs";
import GamingSidebar from "./sidebar/gamingSidebar";
import styles from "../styles/Games.module.css"

export default function Gaming() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />
                <div className={styles.subContainer}>
                    <GamingSidebar />
                    <Gfeed />
                </div>
        </div>
    );
}