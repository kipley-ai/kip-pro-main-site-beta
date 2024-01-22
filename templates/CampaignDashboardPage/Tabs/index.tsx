import styles from "./Tabs.module.sass";
import Link from "next/link";

type TabsHeaderProps = {
    tab: string;
    setTab: Function;
};

const TabsHeader = ({ tab, setTab }: TabsHeaderProps) => {
    return (
        <div>
            <Link href="/campaigns">
                <div className={styles.back}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="17"
                        viewBox="0 0 40 17"
                        fill="none"
                    >
                        <path
                            d="M12.8162 7.96704C11.5651 7.96704 10.5508 8.98132 10.5508 10.2325C10.5508 11.4837 11.5651 12.498 12.8162 12.498L37.7362 12.498C38.9874 12.498 40.0017 11.4837 40.0017 10.2325C40.0017 8.98132 38.9874 7.96704 37.7362 7.96704L12.8162 7.96704Z"
                            fill="#0AE9F2"
                        />
                        <path
                            d="M11.602 8.24342C10.7173 9.1282 10.7173 10.5627 11.602 11.4475C12.4868 12.3323 13.9213 12.3323 14.8061 11.4475L21.4086 4.845C22.2934 3.96022 22.2934 2.52571 21.4086 1.64093C20.5238 0.756147 19.0893 0.756147 18.2045 1.64093L11.602 8.24342Z"
                            fill="#0AE9F2"
                        />
                    </svg>
                    BACK TO GENESIS CAMPAIGN
                </div>
            </Link>
            <div className={styles.nav}>
                <div className={styles.tabs}>
                    <div
                        className={`${styles.tab} ${
                            tab === "invites" ? styles.active : ""
                        }`}
                        onClick={() => setTab("invites")}
                    >
                        <h1>Invites</h1>
                        <div className={styles.ind}></div>
                    </div>
                    <div
                        className={`${styles.tab} ${
                            tab === "leaderboard" ? styles.active : ""
                        }`}
                        onClick={() => setTab("leaderboard")}
                    >
                        <h1>Leaderboard</h1>
                        <div className={styles.ind}></div>
                    </div>
                    <div
                        className={`${styles.tab} ${
                            tab === "nftcollection" ? styles.active : ""
                        }`}
                        onClick={() => setTab("nftcollection")}
                    >
                        <h1>NFT Collection</h1>
                        <div className={styles.ind}></div>
                    </div>
                </div>
                <div className={styles.tabsLine}></div>
            </div>
        </div>
    );
};

export default TabsHeader;
