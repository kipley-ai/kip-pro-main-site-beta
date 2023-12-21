import cn from "classnames";
import { useState, useEffect } from "react";
import styles from "./ChatModal.module.sass";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { chat } from "@/mocks/chat";
import Field from "@/components/Field";

const ChatModal = ({ avatars, onClose }) => {
    const [question, setQuestion] = useState<string>("");

    const currentTimestamp: string = "2023-12-20T10:02:30.000Z";
    const myUsername: string = "KIPtest";

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const [expandedMessages, setExpandedMessages] = useState({});

    const toggleMessageExpansion = (index) => {
        setExpandedMessages((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const timeAgo = (timestamp: string): string => {
        const currentTime = new Date();
        const pastTime = new Date(timestamp);
        const timeDifference = new Date(currentTimestamp) - pastTime.getTime();
        const minutesAgo = Math.floor(timeDifference / (1000 * 60));
        const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

        if (minutesAgo < 1) {
            return "JUST NOW";
        } else if (minutesAgo < 60) {
            return `${minutesAgo} MIN${minutesAgo === 1 ? "" : "S"} AGO`;
        } else if (hoursAgo < 24) {
            return `${hoursAgo} HR${hoursAgo === 1 ? "" : "S"} AGO`;
        } else {
            // If more than 24 hours ago, you can display the full timestamp or another message
            return "MORE THAN 24 HRS AGO";
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
            <Modal className={styles.leftModal}>
                <div className={styles.info}>
                    <h2 className={styles.title}>You are chatting with</h2>
                    <p>
                        The world's most powerful AI KnowledgeFi generation
                        engine.
                        <br />
                        What do you want to ask?
                    </p>
                    <div className={styles.avatars}>
                        {avatars.map((avatar, index) => (
                            <img
                                className={styles.avatar}
                                key={index}
                                src={`/images/twitter-profile/@${avatar}.jpg`}
                                alt={`Avatar ${index}`}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={styles.wallet}
                    style={{ background: `url(images/wallet-gradient.png)` }}
                >
                    <div className={cn("p", styles.walletAddress)}>
                        [ WALLET ADDRESS ]
                    </div>
                    <div className={cn("h2", styles.walletTitle)}>$KIP 500</div>
                    <div className={styles.walletDescription}>
                        <div className={cn("h4", styles.walletIntegration)}>
                            Integration with APIs
                        </div>
                        <div className={cn("p", styles.walletTitle)}>
                            Allow the chatbot to access external data sources,
                            such as weather APIs or news APIs, to provide more
                            relevant recommendations.
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal className={styles.rightModal}>
                <div className={styles.chat}>
                    {chat.map((message, index) => (
                        <div
                            className={cn(styles.message, {
                                [styles.myMessage]:
                                    message.username === myUsername,
                            })}
                            key={index}
                        >
                            {message.username !== myUsername && (
                                <div className={styles.messageAvatar}>
                                    <img
                                        src={`/images/twitter-profile/@${message.username}.jpg`}
                                        alt={`Avatar ${index}`}
                                    />
                                </div>
                            )}
                            <div
                                className={cn(
                                    styles.talkBubble,
                                    {
                                        [styles.leftTop]:
                                            message.username !== myUsername,
                                    },
                                    {
                                        [styles.rightTop]:
                                            message.username === myUsername,
                                    },
                                )}
                            >
                                <div
                                    className={styles.message}
                                    style={{
                                        overflow: expandedMessages[index]
                                            ? "visible"
                                            : "hidden",
                                        maxHeight: expandedMessages[index]
                                            ? "none"
                                            : "1.5em",
                                    }}
                                >
                                    {message.message}
                                </div>
                                {message.message.length > 2 * 40 && (
                                    <button
                                        onClick={() =>
                                            toggleMessageExpansion(index)
                                        }
                                        className={styles.readMoreButton}
                                    >
                                        {expandedMessages[index]
                                            ? "Read Less"
                                            : "Read More"}
                                    </button>
                                )}
                                <div
                                    className={cn(styles.timestamp, {
                                        [styles.leftTimestamp]:
                                            message.username === myUsername,
                                    })}
                                >
                                    {timeAgo(message.timestamp)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.input}>
                    <img
                        src="images/chat-input-orb.png"
                        className={styles.orb}
                        alt="Input Orb"
                    />
                    <Field
                        className={styles.field}
                        placeholder="Type your chat"
                        value={question}
                        onChange={(e: any) => setQuestion(e.target.value)}
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/de/Down-left-arrow_%2861409%29_-_The_Noun_Project.svg"
                        className={styles.arrow}
                        alt="Down Left Arrow"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ChatModal;
