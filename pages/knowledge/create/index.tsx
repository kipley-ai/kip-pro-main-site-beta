import type { NextPage } from "next";
import Layout from "@/components/Layout";
import cn from "classnames";
import styles from "./Role.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const roles = [
    {
        title: "You are a",
        title2: "Data Owner",
        icon: "/images/icon-1.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
    {
        title: "You are an",
        title2: "App Owner",
        icon: "/images/icon-2.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
    {
        title: "You are a",
        title2: "Model Owner",
        icon: "/images/icon-3.svg",
        status: "ONLINE",
        color: "#89EB5B",
    },
];

const Knowledge: NextPage = () => {
    const router = useRouter();
    const { nextStep } = router.query;

    const [showIframe, setShowIframe] = useState(false);

    const handleSetIframe = (idx: number) => {
        if (idx === 0) {
            setShowIframe(true);
        }
    };

    const constructSrc = () => {
        let src = process.env.NEXT_PUBLIC_KF_CREATE;
        if (nextStep && nextStep === "mint_nft") {
            src = src + `?nextStep=${nextStep}`;
        }
        return src;
    };

    return (
        <Layout>
            {showIframe || (nextStep && nextStep === "mint_nft") ? (
                <div
                    style={{
                        marginTop: 100,
                        width: "100%",
                        height: "100vh",
                        padding: 50,
                    }}
                >
                    <iframe
                        src={constructSrc()}
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
                                                width={48}
                                                height={48}
                                                alt="Figure"
                                            />
                                        </div>
                                        <div className={styles.titles}>
                                            <div
                                                className={cn(
                                                    "h3",
                                                    styles.subtitle
                                                )}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                className={cn(
                                                    "h3",
                                                    styles.subtitle
                                                )}
                                            >
                                                {item.title2}
                                            </div>
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
