import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Tasks.module.sass";
import Image from "@/components/Image";
import CampaignImage from "public/images/campaign-pic.jpg"
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";

import { posts } from "@/mocks/posts";
import { relative } from "path";

const getCurrentDate = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};

const careers = [
    {
        title: "Galxe Campaign",
        content: getCurrentDate(),
        image: "/images/campaign-page-ss.png",
        status: [],
        url: "https://galxe.com/KIPProtocol/campaign/GCQH3tUYcq",
    },
];

type TasksProps = {};

const Tasks = ({ }: TasksProps) => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const targetTime: string = "2024-01-06T17:00:00Z";

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
                    timeRemaining / (1000 * 60 * 60 * 24),
                );
                const remainingHours = Math.floor(
                    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                );
                const remainingMinutes = Math.floor(
                    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
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
                <div className={cn("h2", styles.countTitle)}>
                    You have <span className={styles.timeCount}>{days}</span>{" "}
                    days <span className={styles.timeCount}>{hours}</span> hours{" "}
                    <span className={styles.timeCount}>{minutes}</span> min to
                    complete Cycle 1
                </div>
                <div className={cn("campaignItem", styles.campaignItem)}>
                    <a
                        href={
                            "https://galxe.com/KIPProtocol/campaign/GCQH3tUYcq"
                        }
                    >
                        <Image
                            src={CampaignImage}
                        />
                    </a>
                </div>
                {/* {careers.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.details}>
                            <div className={styles.line}>
                                {item.status.map((status, index) => (
                                    <div
                                        className={cn(
                                            {
                                                "status-pink":
                                                    status === "REMOTE",
                                                "status-green":
                                                    status === "FULL-TIME",
                                                "status-yellow":
                                                    status === "CONTRACT",
                                            },
                                            styles.status,
                                        )}
                                        key={index}
                                    >
                                        {status}
                                    </div>
                                ))}
                            </div>
                            <div className={cn("h3", styles.title)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                            <a
                                className={styles.apply}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Explore now{" "}
                                <Icon name="arrow-right" size="26" />
                            </a>
                        </div>
                        <div className={styles.preview}>
                            <Image
                                src={item.image}
                                layout="fill"
                                objectFit="cover"
                                alt={item.title}
                            />
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Tasks;
