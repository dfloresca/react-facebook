import Navbar from "./navbar/navs";
import NewVideos from "./videos/new-videos";
import VideoFeed from "./videos/video-feed";
import GamingSideBar from "./sidebar/gamingSidebar";
import styles from '../styles/Games.module.css'

export default function Videos() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <div className={styles.subContainer}>
            <GamingSideBar />
            <NewVideos />
            <VideoFeed />
            </div>
        </div>
    );
}