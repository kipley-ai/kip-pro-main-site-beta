import type { NextPage } from "next";
import Layout from "@/components/Layout";
import cn from "classnames";
import styles from "./Role.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import { useState } from "react";

const roles = [
    {
        title: "You are a Data Owner",
        icon: "/images/icon-1.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
    {
        title: "You are an App Owner",
        icon: "/images/icon-2.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
    {
        title: "You are a Model Owner",
        icon: "/images/icon-3.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
];

const Knowledge: NextPage = () => {
    const [showIframe, setShowIframe] = useState(false);

    const handleSetIframe = (idx: number) => {
        if (idx === 0) {
            setShowIframe(true);
        }
    };

    return (
        <Layout>
            {showIframe ? (
                <div
                    style={{
                        marginTop: 100,
                        width: "100%",
                        height: "100vh",
                        padding: 50,
                    }}
                >
                    <iframe
                        src={process.env.NEXT_PUBLIC_KF_CREATE}
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            ) : (
                <div className={cn("section", styles.section)}>
                    <div className={cn("container-small", styles.container)}>
                        <div className={styles.head}>
                            <div className={cn("h2", styles.title)}>
                                Choose Your Role
                            </div>
                        </div>
                        <div className={styles.list}>
                            {roles.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.listChild}
                                    onClick={() => handleSetIframe(index)}
                                >
                                    <Card
                                        className={styles.card}
                                        squareCardClass={styles.square}
                                        innerCardClass={styles.inner}
                                        color={item.color}
                                        small
                                    >
                                        <div className={styles.icon}>
                                            <Image
                                                src={item.icon}
                                                width={32}
                                                height={32}
                                                alt="Figure"
                                            />
                                        </div>
                                        <div
                                            className={cn(
                                                "h3",
                                                styles.subtitle
                                            )}
                                        >
                                            {item.title}
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Knowledge;
