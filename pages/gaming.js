import Gfeed from "./gaming/game-feed";
import Navbar from "./navbar/navs";
import GamingSidebar from "./sidebar/gamingSidebar";

export default function Gaming() {
    return (
        <div>
            <Navbar />
            <GamingSidebar />
            <Gfeed />
        </div>
    );
}