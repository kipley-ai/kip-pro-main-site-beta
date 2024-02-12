import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { getStartedCards } from "@/mocks/developer-hub/get-started";

const Development = () => {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container-wide", styles.container)}>
                <h2 className={cn("h2", styles.title)}>Get Started</h2>
                <p className={cn("p", styles.description)}>
                    Learn about KIP Protocol and get started with our
                    open-source packages
                </p>
                <div className={styles.list} {...events} ref={ref}>
                    {getStartedCards.map((item, index) => (
                        <Card
                            className={styles.card}
                            color={item.color}
                            key={index}
                            animateIn="fadeInDown"
                            delay={item.delay}
                        >
                            <div className={styles.preview}>
                                <Image
                                    src={item.image}
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                            <div className={styles.foot}>
                                <div
                                    className={styles.more}
                                    style={{ color: item.color }}
                                >
                                    Learn more
                                </div>
                                <Icon
                                    className={styles.arrow}
                                    name="arrow-right"
                                    size="26"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Development;
