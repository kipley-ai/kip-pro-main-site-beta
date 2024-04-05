import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Tasks.module.sass";
import Image from "@/components/Image";
// import CampaignImage from "public/images/campaign-pic.jpg";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";

import { relative } from "path";

const getCurrentDate = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};

type TasksProps = {};

const Tasks = ({}: TasksProps) => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const targetTime: string = "2024-04-09T10:00:00Z";

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
                        {/* <div className={styles.airdrop}>
                            <div className={cn("h4", styles.subtitle)}>
                                AIRDROP QUEST
                            </div>
                        </div> */}
                        <div className={styles.links}>
                            <Card
                                className={styles.linkCard}
                                cornerCardClass={styles.corner}
                                backgroundCardClass={styles.backgroundCard}
                                squareCardClass={styles.square}
                                innerCardClass={styles.inner}
                                color="#00FF00"
                                url="https://galxe.com/KIPProtocol/campaign/GC5r4thCzj"
                                externalUrl
                            >
                                <div className={styles.details}>
                                    <div className={cn("h4", styles.linkSubtitle)}>
                                        <Image
                                            src="/images/Galxe-logo-new.png"
                                            alt="Galxe"
                                            layout="fill"
                                            className={styles.logo}
                                        />
                                        <Icon
                                            name="arrow-right"
                                            className={styles.rightArrow}
                                            fill="#FFF"
                                            size="38"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card
                                className={styles.linkCard}
                                cornerCardClass={styles.corner}
                                backgroundCardClass={styles.backgroundCard}
                                squareCardClass={styles.square}
                                innerCardClass={styles.inner}
                                color="#00FF00"
                                url="https://taskon.xyz/space/2075880"
                                externalUrl
                            >
                                <div className={styles.details}>
                                    <div className={cn("h4", styles.linkSubtitle)}>
                                        <Image
                                            src="/images/taskon-logo-new.png"
                                            alt="TaskOn"
                                            layout="fill"
                                            className={styles.logo}
                                        />
                                        <Icon
                                            name="arrow-right"
                                            className={styles.rightArrow}
                                            fill="#FFF"
                                            size="38"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
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
                                Refreshes every cycle for additional points.<br />
                                Invite friends to earn extra points!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
