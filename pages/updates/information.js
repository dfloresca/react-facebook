import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Inbox.module.css';
import Info from '../info';

const updatesArray = [
    { username: 'System', message: "🚀 Exciting News! 🎉 We've just rolled out a brand-new feature called 'Spark Moments'! ✨ Share your most unforgettable memories with a vibrant burst of creativity. Add music, effects, and more to make your moments truly shine. Let the sparks fly and ignite your feed with #SparkMoments!" },
    { username: 'System', message: "🌐 Explore the World 🌍: Introducing the 'Global Connections' feature! 🤝 Connect with users around the world who share your interests. Expand your horizons, make new friends, and discover diverse perspectives. It's time to break down borders and build bridges. #GlobalConnections #ExpandYourHorizons" },
    { username: 'System', message: "🎨 Express Yourself with Style! 💃 Say hello to our latest update – customizable profiles! 🌈 Choose from a variety of themes, fonts, and colors to create a profile that truly reflects you. Let your personality shine through and make your mark in style. #CustomizeYourProfile #ExpressYourself" },
    { username: 'System', message: "🤩 Emoji Overload! 🎉 Spice up your chats with our expanded emoji collection! 🚀 From classic smileys to quirky animals, we've got them all. Express yourself like never before and add a dash of fun to your conversations. Which emoji will be your new favorite? Let us know! #EmojiMania #ExpressYourEmotions" },
    { username: 'System', message: "📸 Snap, Edit, Share – Effortlessly! 🌟 Presenting the 'SnapPro' camera update! 📷 Capture stunning moments with improved camera features, and use the enhanced editing tools to perfect your photos. Share your masterpieces with confidence, and let the world see your photography skills shine. #SnapPro #PhotographyMagic" }
]

export default function RandomUpdates() {
    const displayUpdatesArray = updatesArray.map((update, idx) => {
        return <Info username={update.username} message={update.message} />
    });

    return (
        <div className={styles.grid}>
            {displayUpdatesArray}
        </div>
    )
}







