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

    const targetTime: string = "2024-04-02T10:00:00Z";

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
                <div className={styles.row}>
                    <div className={styles.wrap}>
                        <a 
                            href="https://galxe.com/KIPProtocol/campaign/GCAcJttXFV"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/images/airdrop/airdrop-quest-020424.png"
                                alt="Airdrop"
                                width={400}
                                height={400}
                                className={styles.airdropImage}
                            />
                        </a>
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
