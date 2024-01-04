import cn from "classnames";
import styles from "./Congratulations.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";
import WhiteButton from "@/components/WhiteButton";

const getCurrentDate = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};

const posts = [
    {
        title: "Galxe Campaign",
        date: getCurrentDate(),
        image: "/images/campaign-page-ss.png",
        status: "FEATURES",
        url: "https://galxe.com/KIPProtocol/campaign/GCQH3tUYcq",
        color: "#01F7FF",
    },
];

type CongratulationsProps = {
    scrollToRef: any;
};

const Congratulations = ({ scrollToRef }: CongratulationsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={styles.backgroundGradient}></div>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        Conquer. Claim. Collect. Repeat.
                    </div>
                    <div className={styles.info}>
                        Complete missions, recruit allies, contribute on Discord
                        - loot points with every triumph! Accumulate 300 points
                        and exchange for randomized NFT blind boxes. Within each
                        box lies untold digital wealth - Gold, Silver or Bronze
                        tier collectibles representing generous airdrops. Will
                        you uncover the rarest of prizes? There are only 10,000
                        total for the taking! Each revealed NFT is yours to keep
                        or trade as you please. But grab your boxes fast - once
                        they&#39;re gone, the adventure ends! Our realm awaits
                        brave explorers like you. Questing refreshes every few
                        days. Join now to start stacking points before this
                        event concludes in March 2024! Fortune and glory to the
                        victors! Let the quests commence!
                    </div>
                    {/* <div className={styles.buttons}>
                        <Link href="/leaderboard">
                            <a className={cn("button", styles.button)}>
                                <span>VIEW LEADERBOARD</span>
                            </a>
                        </Link>
                    </div> */}
                </div>
                <div className={styles.preview}>
                    <div className={styles.list}>
                        {posts.map((item, index) => (
                            <Card
                                className={styles.card}
                                cornerCardClass={styles.corner}
                                backgroundCardClass={styles.backgroundCard}
                                squareCardClass={styles.square}
                                innerCardClass={styles.inner}
                                color={item.color}
                                key={index}
                                url={item.url}
                            >
                                <div className={styles.details}>
                                    {/* <div
                                        className={cn("status", styles.status)}
                                        style={{ color: item.color }}
                                    >
                                        {item.status}
                                    </div> */}
                                    <div className={cn("h4", styles.subtitle)}>
                                        {item.title}
                                    </div>
                                    {/* <div className={styles.line}>
                                        <div className={styles.date}>
                                            {item.date}
                                        </div>
                                        <Icon
                                            className={styles.arrow}
                                            name="arrow-right"
                                            size="26"
                                        />
                                    </div> */}
                                    <div className={styles.preview}>
                                        <Image
                                            src={"/images/galxe-ch1-ss.png"}
                                            width={580}
                                            height={329}
                                            objectFit="fill"
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <WhiteButton />
        </div>
    </div>
);

export default Congratulations;
