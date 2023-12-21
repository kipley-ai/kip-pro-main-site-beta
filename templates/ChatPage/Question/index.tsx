import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Question.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Field from "@/components/Field";
import ChatModal from "./ChatModal";

import { accounts } from "@/mocks/twitter-accounts";

type QuestionProps = {};

const Question = ({}: QuestionProps) => {
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

    const handleSiriClick = () => {
        console.log("Siri clicked");
        setIsModalOpen(true);
    };

    useEffect(() => {
        console.log("Selected members: ", selectedMembers);
    }, [selectedMembers]);

    return (
        <div className={cn("section", styles.section)}>
            {isModalOpen && (
                <ChatModal
                    avatars={selectedMembers}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
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
                {selectedMembers.length > 0 && (
                    <div
                        className={styles.siri}
                        onClick={() => handleSiriClick()}
                    >
                        <img src="/images/chat-siri.png" alt="Chat" />
                    </div>
                )}
                <div className={styles.list}>
                    {accounts.map((man, index) => (
                        <AnimationOnScroll
                            className={
                                selectedMembers.includes(man.name)
                                    ? styles["selected-item"]
                                    : styles.item
                            }
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
                </div>
            </div>
        </div>
    );
};

export default Question;
