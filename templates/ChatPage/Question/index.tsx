import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Question.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Field from "@/components/Field";

import { accounts } from "@/mocks/twitter-accounts";

type QuestionProps = {};

const Question = ({}: QuestionProps) => {
    const [question, setQuestion] = useState<string>("");

    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

    // Function to toggle a team member's selection and colorization
    const toggleSelection = (name: string) => {
        if (selectedMembers.includes(name)) {
            // If already selected, remove from the list
            setSelectedMembers((prevSelected) =>
                prevSelected.filter((member) => member !== name),
            );
        } else {
            // If not selected, add to the list
            setSelectedMembers((prevSelected) => [...prevSelected, name]);
        }
    };

    useEffect(() => {
        console.log("Selected members: ", selectedMembers);
    }, [selectedMembers]);

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    {/* <div className={cn("h3", styles["small-title"])}>
                        Meet the KIP team
                    </div> */}
                    <div className={cn("h2", styles.title)}>
                        Introducing KnowledgeFi
                    </div>
                    <div className={cn("p", styles.title)}>
                        Everyone should be empowered, through the systematic
                        creation of true digital property rights, to unlock the
                        full economic value of our Knowledge Assets.
                    </div>
                </div>
                <div className={styles.list}>
                    {accounts.map((man, index) => (
                        <AnimationOnScroll
                            className={styles.item}
                            initiallyVisible
                            key={index}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: selectedMembers.includes(
                                        man.name,
                                    )
                                        ? "#89EB5B" // Selected color
                                        : "#EBB15B", // Default color
                                }}
                            ></div>
                            <div
                                className={styles.photo}
                                onClick={() => toggleSelection(man.name)}
                            >
                                <div className={styles.inner}>
                                    <Image
                                        src={man.image}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                        style={{
                                            filter: selectedMembers.includes(
                                                man.name,
                                            )
                                                ? "grayscale(0)" // Colorized
                                                : "grayscale(100)", // Grayscale
                                        }}
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("p", styles.name)}>
                                    {man.name}
                                </div>
                            </div>
                        </AnimationOnScroll>
                    ))}
                    <div className={styles.input}>
                        <Field
                            className={styles.field}
                            placeholder="Ask a question"
                            value={question}
                            onChange={(e: any) => setQuestion(e.target.value)}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Down-left-arrow_%2861409%29_-_The_Noun_Project.svg"
                            className={styles.arrow}
                            alt="Down Left Arrow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
