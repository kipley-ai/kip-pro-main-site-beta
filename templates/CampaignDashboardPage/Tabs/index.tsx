import styles from "./Tabs.module.sass";
import Link from "next/link";

type TabsHeaderProps = {
    tab: string;
    setTab: Function;
};

const TabsHeader = ({ tab, setTab }: TabsHeaderProps) => {
    return (
        <div>
            <Link href="/">
                <div className={styles.back}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11L20 13L8 13L8 15L6 15L6 13L4 13L4 11L6 11L6 9L8 9L8 11L20 11ZM10 7L8 7L8 9L10 9L10 7ZM10 7L12 7L12 5L10 5L10 7ZM10 17L8 17L8 15L10 15L10 17ZM10 17L12 17L12 19L10 19L10 17Z" fill="#59FAFA"/>
                </svg>

                    BACK TO GENESIS CAMPAIGN
                </div>
            </Link>
            {/* <div className={styles.nav}>
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
            </div> */}
        </div>
    );
};

export default TabsHeader;
