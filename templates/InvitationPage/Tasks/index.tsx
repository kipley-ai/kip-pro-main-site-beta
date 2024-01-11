import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Tasks.module.sass";
import Image from "@/components/Image";
// import CampaignImage from "public/images/campaign-pic.jpg";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";

import { relative } from "path";

const posts = [
    {
        title: "Cycle 1 Tasks",
        date: "",
        // image: CampaignImage,
        status: "FEATURES",
        url: "https://galxe.com/KIPProtocol/campaign/GCGSJttp9G",
        color: "#01F7FF",
    },
];

const getCurrentDate = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};

const careers = [
    {
        title: "Cycle 1 Tasks",
        content: getCurrentDate(),
        // image: CampaignImage,
        status: [],
        url: "https://galxe.com/KIPProtocol/campaign/GCQH3tUYcq",
    },
];

type TasksProps = {};

const Tasks = ({}: TasksProps) => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const targetTime: string = "2024-01-14T03:00:00Z";

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            const targetDate = new Date(targetTime).getTime();

            if (currentTime >= targetDate) {
                setDays(0);
                setHours(0);
                setMinutes(0);
                clearInterval(intervalId);
            } else {
                const timeRemaining = targetDate - currentTime;
                const remainingDays = Math.floor(
                    timeRemaining / (1000 * 60 * 60 * 24)
                );
                const remainingHours = Math.floor(
                    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const remainingMinutes = Math.floor(
                    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
                );

                setDays(remainingDays);
                setHours(remainingHours);
                setMinutes(remainingMinutes);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={cn("section", styles.section)}>
            <div className={styles.backgroundGradient}></div>
            <div className={cn("container", styles.container)}>
                {/* <div className={cn("h2", styles.title)}>Cycle Tasks</div> */}
                <div className={styles.row}>
                    <div className={styles.wrap}>
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
                                externalUrl
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
                                        <Icon
                                            name="arrow-right"
                                            className={styles.rightArrow}
                                            fill="#FFF"
                                            size="38"
                                        />
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
                                    {/* <div className={styles.previewCard}>
                                            <Image
                                                src={CampaignImage}
                                                // width={580}
                                                // height={329}
                                                objectFit="cover"
                                                alt={item.title}
                                            />
                                        </div> */}
                                </div>
                            </Card>
                        ))}
                        <div className={cn("h2", styles.countTitle)}>
                            <span className={styles.timeCount}>{days}</span>{" "}
                            days{" "}
                            <span className={styles.timeCount}>{hours}</span>{" "}
                            hours{" "}
                            <span className={styles.timeCount}>{minutes}</span>{" "}
                            min remaining...
                        </div>
                        <div className={styles.info}>
                            <p>
                                Refreshes every cycle for additional points and
                                invite codes. Boost your lead! Invite friends
                                for extra points.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
