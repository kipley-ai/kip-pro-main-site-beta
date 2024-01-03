import cn from "classnames";
import styles from "./Congratulations.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";

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

type CongratulationsProps = {};

const Congratulations = ({}: CongratulationsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        You made it to the 1st cycle! Start earning $KIP
                    </div>
                    <div className={styles.info}>
                        Follow us on Twitter today and experience the power of
                        Knowledge in your life!
                    </div>
                    <div className={styles.buttons}>
                        <Link href="/leaderboard">
                            <a className={cn("button", styles.button)}>
                                <span>VIEW LEADERBOARD</span>
                            </a>
                        </Link>
                    </div>
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
                                small
                            >
                                <div className={styles.preview}>
                                    <Image
                                        src={item.image}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={item.title}
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div
                                        className={cn("status", styles.status)}
                                        style={{ color: item.color }}
                                    >
                                        {item.status}
                                    </div>
                                    <div className={cn("h4", styles.subtitle)}>
                                        {item.title}
                                    </div>
                                    <div className={styles.line}>
                                        <div className={styles.date}>
                                            {item.date}
                                        </div>
                                        <Icon
                                            className={styles.arrow}
                                            name="arrow-right"
                                            size="26"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Congratulations;
