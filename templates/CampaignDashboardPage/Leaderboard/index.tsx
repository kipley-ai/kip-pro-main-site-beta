import styles from "./Leaderboard.module.sass";

function Leaderboard() {
    return (
        <div className={styles.container}>
            <div>
                <div>gambar</div>
                <div className={styles.score}>Your Score: 99</div>
                <div className={styles.redeem}>
                    REDEEM NFT
                    <div className={styles.border}></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="60"
                        viewBox="0 0 18 60"
                        fill="none"
                        className={styles.corner}
                    >
                        <path
                            d="M0.5 1.5H2.08563C2.73174 1.5 3.33805 1.81213 3.71343 2.338L16.1278 19.7289C16.3699 20.068 16.5 20.4742 16.5 20.8909V56.5C16.5 57.6046 15.6046 58.5 14.5 58.5H0.5"
                            stroke="#01F7FF"
                            stroke-width="2"
                        />
                    </svg>
                </div>
            </div>
            <div>Leaderboard</div>
        </div>
    );
}

export default Leaderboard;
