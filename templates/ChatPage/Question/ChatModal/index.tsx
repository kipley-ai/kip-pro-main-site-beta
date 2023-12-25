import cn from "classnames";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./ChatModal.module.sass";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { chat } from "@/mocks/chat";
import Field from "@/components/Field";

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useWeb3Context } from "@/components/GetInvolvedButton/Web3Context";

const currentTimestamp: string = "2023-12-20T10:02:30.000Z";
const myUsername: string = "KIPtest";
const webSocketUrl: string =
    "wss://chatbox-personal-twitter-test.kipley.ai/twitter-search/async_websocket";

type ChatModalProps = {
    avatars: string[];
    onClose: () => void;
};

let globalQuestion = ""; // global var


const ChatModal = ({ avatars, onClose }: ChatModalProps) => {
    const [question, setQuestion] = useState<string>("");
    const [expandedMessages, setExpandedMessages] = useState<{
        [index: number]: boolean;
    }>({});
    const [chatHistory, setChatHistory] = useState<
        Array<{ username: string; message: string; timestamp: string }>
    >([]);

    const [mode, setMode] = useState("output");
    const [isBold, setIsBold] = useState(false);

    const [analysisStatus, setAnalysisStatus] = useState("answer_1"); // idle, answer_1, answer_2
    const [answer, setAnswer] = useState(null);
    const [answer1, setAnswer1] = useState([]);
    const [answer2, setAnswer2] = useState([]);
    const fieldRef = React.useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState("saylor");
    const [connection1closed, setConnection1Closed] = useState(false);
    const [connection2closed, setConnection2Closed] = useState(false);
    const [sentences1, setSentences1] = useState(0);
    const [sentences2, setSentences2] = useState(0);

    const {
        sendMessage: sendMessage1,
        lastMessage: lastMessage1,
        readyState: readyState1,
        getWebSocket: getWebSocket1,
    } = useWebSocket(
        "wss://chatbox-personal-twitter.kipley.ai/twitter-search/async_websocket",
        {
            onClose: (event) => {
                console.log("WebSocket 1 Closed");

                setChatHistory([
                    ...chatHistory,
                    {
                        username: "saylor",
                        message: answer1.slice(1, -1).join(""),
                        timestamp: "2023-12-20T10:01:00.000Z",
                    },
                ]);
                setAnswer1([]);
                setConnection1Closed(true);
                handleClickSendMessage2();
            },
        },
    );

    const {
        sendMessage: sendMessage2,
        lastMessage: lastMessage2,
        readyState: readyState2,
        getWebSocket: getWebSocket2,
    } = useWebSocket(
        connection1closed
            ? "wss://chatbox-personal-twitter.kipley.ai/twitter-search/async_websocket"
            : null,
        {
            onClose: (event) => {
                console.log("WebSocket 2 Closed");
                let modifiedAnswer2: string[] = answer2.slice(1, -1);
                modifiedAnswer2 = modifiedAnswer2.map((item) =>
                    item == "James" ? "Brian" : item,
                );

                setChatHistory([
                    ...chatHistory,
                    {
                        username: "brian_armstrong",
                        message: modifiedAnswer2.join(""),
                        timestamp: "2023-12-20T10:02:00.000Z",
                    },
                ]);
                setAnswer2([]);
                console.log("connection reset");
            },
        },
    );

    const connectionStatus1 = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState1];

    const connectionStatus2 = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState2];

    const { account } = useWeb3Context();

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const toggleMessageExpansion = (index: number) => {
        setExpandedMessages((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const timeAgo = (timestamp: string): string => {
        const currentTime = new Date(currentTimestamp);
        const pastTime = new Date(timestamp);

        const timeDifference = currentTime.getTime() - pastTime.getTime();
        const minutesAgo = Math.floor(timeDifference / (1000 * 60));
        const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

        if (minutesAgo < 1) {
            return "JUST NOW";
        } else if (minutesAgo < 60) {
            return `${minutesAgo} MIN${minutesAgo === 1 ? "" : "S"} AGO`;
        } else if (hoursAgo < 24) {
            return `${hoursAgo} HR${hoursAgo === 1 ? "" : "S"} AGO`;
        } else {
            return "MORE THAN 24 HRS AGO";
        }
    };

    const getCurrentTime = (): string => {
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, "0");
        const minute = now.getMinutes().toString().padStart(2, "0");
        return `${hour}:${minute}`;
    };

    const app_ids = {
        saylor: "2ad3e821-4457-417e-8aeb-f3ffc54492c9",
        brian_armstrong: "9cb85eda-0e56-4a06-8c53-19b61227d394",
    };

    const kb_ids = {
        saylor: "8d991ea9-8cee-4c31-9f93-f41343caaa2f",
        brian_armstrong: "042a65a0-66d1-47df-bc9b-c0b82a73385e",
    };

    const handleChat = () => {
        setChatHistory([
            {
                username: "KIPtest",
                message: question,
                timestamp: "2023-12-20T10:00:00.000Z",
            },
        ]);
        globalQuestion = question;
        handleClickSendMessage();
        setQuestion("");
    };

    const pluginConfig1 = {
        SUMMARY_PROMPT: {
            prompt_template:
                "Act as Michael Saylor, an American entrepreneur, business executive, and author, known for his role as the co-founder and longtime CEO of MicroStrategy, a company specializing in business intelligence, mobile software, and cloud-based services.\n\
                Use the following pieces of context retreived from Michael's tweets to answer the question at the end. \
                Here are Michael's tweets:\n{context} \n\
                Here is the question: {question}\n\
                Please answer the question directly from first perspective. Do now say something like 'As Michael, I ...'.\n \
                Here are some helpful answers from chat history:",
            model_temperature: "0.73",
            frequency_penalty: "0.49",
            presence_penalty: "0.21",
        },
    };

    const pluginConfig2 = {
        SUMMARY_PROMPT: {
            prompt_template:
                "Act as Brian Armstrong, an American entrepreneur, known for co-founding and leading Coinbase, one of the world's largest cryptocurrency exchanges. \
                Use the following pieces of context retreived from Brian's tweets to answer the question at the end. \
                Here are Brian's tweets:\n{context}\n\
                Here is the question: {question}\n\
                Please answer the question directly from first perspective. Do now say something like 'As Brian, I ...'. \n\
                Here are some helpful answers from chat history:",
            model_temperature: "0.73",
            frequency_penalty: "0.49",
            presence_penalty: "0.21",
        },
    };

    // console.log("question1", globalQuestion);
    const handleClickSendMessage = useCallback(
        () =>
            sendMessage1(
                JSON.stringify({
                    keyword: globalQuestion,
                    user_id: "01293ea3-0311-4447-bf9e-41fec92c71fd",
                    session_id: "3c9da8d5-9cf6-43f5-9c29-c92c2a979fe2",
                    app_id: "2ad3e821-4457-417e-8aeb-f3ffc54492c9",
                    kb_id: "8d991ea9-8cee-4c31-9f93-f41343caaa2f",
                    plugin_config: JSON.stringify(pluginConfig1),
                }),
            ),
        [globalQuestion, sendMessage1],
    );
    // console.log("question2", globalQuestion);
    const handleClickSendMessage2 = useCallback(
        () =>
            sendMessage2(
                JSON.stringify({
                    keyword: globalQuestion,
                    user_id: "01293ea3-0311-4447-bf9e-41fec92c71fd",
                    session_id: "e94f1b88-2341-457b-9f8a-29ad20c10e7f",
                    app_id: "9cb85eda-0e56-4a06-8c53-19b61227d394",
                    kb_id: "042a65a0-66d1-47df-bc9b-c0b82a73385e",
                    plugin_config: JSON.stringify(pluginConfig2),
                }),
            ),
        [globalQuestion, sendMessage2],
    );

    useEffect(() => {
        if (lastMessage1 !== null) {
            if (analysisStatus === "answer_1") {
                setAnswer1((prev: any) => {
                    if (JSON.parse(lastMessage1.data).type === "stream") {
                        const message = JSON.parse(lastMessage1.data);
                        // if (sentences1 === 2) {
                        //     const websocket = getWebSocket1();
                        //     if (websocket) {
                        //         websocket.close();
                        //     }
                        // }
                        // if (message.message.includes(".")) {
                        //     setSentences1((prev) => prev + 1);
                        // }
                        return [...prev, message.message];
                    } else {
                        return prev;
                    }
                });
            }
        }
    }, [lastMessage1]);

    useEffect(() => {
        if (lastMessage2 !== null) {
            if (analysisStatus === "answer_1") {
                setAnswer2((prev: any) => {
                    if (JSON.parse(lastMessage2.data).type === "stream") {
                        const message = JSON.parse(lastMessage2.data);
                        // if (sentences2 === 2) {
                        //     const websocket = getWebSocket2();
                        //     if (websocket) {
                        //         websocket.close();
                        //     }
                        // }
                        // if (message.message.includes(".")) {
                        //     setSentences2((prev) => prev + 1);
                        // }
                        return [...prev, message.message];
                    } else {
                        return prev;
                    }
                });
            }
        }
    }, [lastMessage2]);

    useEffect(() => {
        const closeWebSocketAfterTwoMinutes = setTimeout(() => {
            const websocket = getWebSocket1();

            if (websocket && readyState1 === ReadyState.OPEN) {
                websocket.close();
            }
        }, 30000);

        return () => {
            clearTimeout(closeWebSocketAfterTwoMinutes);
            const websocket = getWebSocket1();

            if (websocket && readyState1 === ReadyState.OPEN) {
                websocket.close();
            }
        };
    }, [getWebSocket1, readyState1]);

    useEffect(() => {
        const closeWebSocketAfterTwoMinutes = setTimeout(() => {
            const websocket = getWebSocket2();

            if (websocket && readyState2 === ReadyState.OPEN) {
                websocket.close();
            }
        }, 30000);

        return () => {
            clearTimeout(closeWebSocketAfterTwoMinutes);
            const websocket = getWebSocket2();

            if (websocket && readyState2 === ReadyState.OPEN) {
                websocket.close();
            }
        };
    }, [getWebSocket2, readyState2]);

    console.log("answer1", answer1);
    console.log("answer2", answer2);

    return (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
            <Modal className={styles.leftModal}>
                <div className={styles.info}>
                    <h2 className={styles.title}>You are chatting with</h2>
      {/*              <p>
                        The world's most powerful AI KnowledgeFi generation
                        engine.
                        <br />
                        What do you want to ask?
                    </p>*/}
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
                    <div className={cn("h4", styles.walletTitle)} style={{ lineHeight: '1.2', letterSpacing: '-0.5px' }}>Wallet Address</div>
                    <div className={cn("p", styles.walletAddress)} style={{ lineHeight: '1.2', letterSpacing: '-0.5px' }}>
                        [ {account} ]
                    </div>
                    
                    {/* <div className={styles.walletDescription}>
                        <div className={cn("h4", styles.walletIntegration)}>
                            Integration with APIs
                        </div>
                        <div className={cn("p", styles.walletTitle)}>
                            Allow the chatbot to access external data sources,
                            such as weather APIs or news APIs, to provide more
                            relevant recommendations.
                        </div>
                    </div> */}
                </div>
            </Modal>
            <Modal className={styles.rightModal}>
                <div className={styles.chat}>
                    {chatHistory &&
                        chatHistory.map((message, index) => (
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
                                                : "3em",
                                        }}
                                    >
                                        {message.message}
                                    </div>
                                    {message.message.length > 25 && (
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
                                        {getCurrentTime()}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={styles.input}>
                    <img
                        src="images/chat-siri-without-ring.png"
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
                        onClick={handleChat}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ChatModal;
