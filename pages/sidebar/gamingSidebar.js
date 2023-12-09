import GamingCategories from "./gamingCategories";
import SidebarSearch from "./sidebarSearch";
import styles from '../../styles/Games.module.css'
export default function GamingSideBar() {
    return (
        <div className={styles.sideBar}>
            <div>
                <h3>Gaming <span><p>Settings(gear icon)</p></span></h3>
                <SidebarSearch />
                <p>controller icon = Play Games</p>
                <p>bell icon = Notifications</p>
            </div>
            <hr />
            <div>
                <h4>Your Games <span><p>See All</p></span></h4>
                <p>Save a game to Your games to create a shortcut for it here</p>
                <p>bookmark icon = Save Games</p>
            </div>
            <hr />
            <div>
                <h4>Categories</h4>
                <GamingCategories />
            </div>


        </div>
    )
}