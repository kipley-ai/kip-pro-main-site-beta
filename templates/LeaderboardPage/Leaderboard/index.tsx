import cn from "classnames";
import styles from "./Leaderboard.module.sass";
import Item from "./Item";
import LeaderboardTable from "./LeaderboardTable";

type LeaderboardProps = {};

const Leaderboard = ({}: LeaderboardProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)}>Leaderboard</div>
            <div className={cn("p", styles.subtitle)}>
                Follow us on Twitter today and experience the power of Knowledge
                in your life!
            </div>
            <LeaderboardTable />
        </div>
    </div>
);

export default Leaderboard;
