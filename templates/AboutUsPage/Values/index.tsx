import cn from "classnames";
import styles from "./Values.module.sass";
import Card from "@/components/Card";

import { hexToRgbA } from "@/utils/index";

const list = [
    {
        title: "Establishing Performance Guidelines in Fine Tuning, Retrieval Augmented Generation and Soft Prompting for Non-Specialist LLM Users",
        status: "RAG",
        color: "#EB5BE5",
        link: "https://arxiv.org/pdf/2311.05903.pdf"
    },
    {
        title: "Politics of 0xbedience",
        status: "Experimental DAO Governance",
        color: "#6F5BEB",
        link: "https://xianyangcb.substack.com/p/the-politics-of-0xbedience"
    },
    {
        title: "Learning the Language of Rain",
        status: "Predictive AI for Weather Forecasting",
        color: "#89EB5B",
        link: "https://xianyangcb.substack.com/p/learning-the-language-of-rain"
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={cn("h3", styles.subtitle)}>Our AI Research</div>
                    <div className={cn("h2", styles.title)}>
                        AI Research
                    </div>
                    <div className={styles.content}>
                        Check out some of the research and papers we've done previously on blockchain & AI
                    </div>
                    {/* <button className={cn("button", styles.button)}>
                        <span>launch app</span>
                    </button> */}
                </div>
                <div className={styles.col}>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                key={index}
                                color={item.color}
                                url={item.link}
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            item.color,
                                            0.05
                                        ),
                                        color: item.color,
                                    }}
                                >
                                    {item.status}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                    {item.title}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Values;
