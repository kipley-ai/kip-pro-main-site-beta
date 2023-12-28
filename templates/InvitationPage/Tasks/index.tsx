import cn from "classnames";
import styles from "./Tasks.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";

import { posts } from "@/mocks/posts";

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
    // {
    //     title: "Web3 Developer",
    //     content:
    //         "Stay current on the latest Onix project developments, news, and content, updated daily.",
    //     image: "/images/blog/photo-2.png",
    //     status: ["REMOTE", "CONTRACT"],
    //     url: "https://ui8.net/",
    // },
    // {
    //     title: "Project Manager",
    //     content:
    //         "Stay current on the latest Onix project developments, news, and content, updated daily.",
    //     image: "/images/blog/photo-3.png",
    //     status: ["REMOTE", "FULL-TIME"],
    //     url: "https://ui8.net/",
    // },
];

const days = 2;
const hours = 12;
const minutes = 30;

type TasksProps = {};

const Tasks = ({}: TasksProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.countTitle)}>
                You have <span className={styles.timeCount}>{days}</span> days{" "}
                <span className={styles.timeCount}>{hours}</span> hours{" "}
                <span className={styles.timeCount}>{minutes}</span> mins to
                complete these tasks
            </div>
            {careers.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.details}>
                        <div className={styles.line}>
                            {item.status.map((status, index) => (
                                <div
                                    className={cn(
                                        {
                                            "status-pink": status === "REMOTE",
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
                            Explore now <Icon name="arrow-right" size="26" />
                        </a>
                    </div>
                    <div className={styles.preview}>
                        <Image
                            src={item.image}
                            layout="fill"
                            objectFit="cover"
                            alt="Careers"
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Tasks;
