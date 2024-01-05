import Icon from "components/Icon";
import styles from "./WhiteButton.module.sass";

type WhiteButtonProps = {};

const WhiteButton = ({ }: WhiteButtonProps) => (
    <div className={styles.line}>
        <div className={styles.backArrow}>
            <a className={styles.apply} href={"/leaderboard"}>
                INVITE CODE & LEADERBOARD <Icon name="arrow-right" size="26" />
            </a>
        </div>
    </div>
);

export default WhiteButton;
