import Navbar from "./navbar/navs";
import SettingSearch from "./settings/search";
import Sfeed from "./settings/settings-feed";
import GamingSideBar from "./sidebar/gamingSidebar";
import styles from '../styles/Games.module.css';


export default function Settings() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <div className={styles.subContainer}>
            <GamingSideBar />
            <SettingSearch />
            <Sfeed />
            </div>
        </div>
    );
}