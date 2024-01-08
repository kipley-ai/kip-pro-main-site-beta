import React, { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Field from "@/components/Field";
import Link from "next/link";
import GetInvolvedButton from "@/components/GetInvolvedButton";
import { useAccount } from "wagmi";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-5.png",
];

type MainProps = { handleValidateCode: (code: string) => void };

const Main = ({ handleValidateCode }: MainProps) => {
    const [code, setCode] = useState("");
    const [isBlankPresent, setIsBlankPresent] = useState(true);

    const { isConnected } = useAccount();

    const [otp, setOtp] = useState(new Array(5).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (element: any, index: number) => {
        if (!/^[A-Za-z0-9]$/.test(element.value)) {
            return false;
        }

        let value = element.value;

        if (isNaN(value)) {
            value = value.toUpperCase();
        }

        setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e: any, index: number) => {
        // Check if the key pressed is Backspace, Delete, or ArrowLeft
        if (
            e.key === "Backspace" ||
            e.key === "Delete" ||
            e.key === "ArrowLeft"
        ) {
            e.preventDefault(); // Prevent default behavior

            // Update OTP array
            const newOtp = [...otp];
            newOtp[index] = ""; // Clear the current input
            setOtp(newOtp);

            // If not the first input, move focus to the previous input
            if (index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    useEffect(() => {
        // Check if any string in the OTP array is blank
        const blankCheck = otp.some((otpValue) => otpValue.trim() === "");
        setIsBlankPresent(blankCheck);
    }, [otp]);

    return (
        <div
            className={styles.section}
            style={{
                background:
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/invite-bg.png)",
                backgroundPosition: "center top",
                backgroundSize: "contain",
                width: "100%",
                height: "100%",
            }}
        >
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        KIP PROTOCOL: GENESIS
                        <br />
                    </div>
                    <div className={cn("p", styles.subtitle)}>
                        Enter Invite Code to Join.
                    </div>
                    {/* <div className={styles.info}>
                        <p>Enter your invite code here</p>
                    </div> */}
                    {/* <div className={styles.input}>
                        <Field
                            className={styles.field}
                            placeholder="Enter your invite code here"
                            value={code}
                            onChange={(e: any) => setCode(e.target.value)}
                        />
                    </div> */}
                    <div className={styles.verificationCode}>
                        <div className={styles.verificationCodeInputs}>
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        type="text"
                                        maxLength={1}
                                        key={index}
                                        value={otp[index]}
                                        onChange={(e) =>
                                            handleChange(e.target, index)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        ref={(ref) =>
                                            (inputsRef.current[index] = ref)
                                        }
                                        className={styles.inputBox}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            onClick={() => handleValidateCode(code)}
                            className={cn("button", styles.getInvolvedButton)}
                            disabled={isBlankPresent}
                        >
                            <span>JOIN NOW</span>
                        </button>
                    </div>
                    {!isConnected && (
                        <>
                            <div className={cn("p", styles.subtitle)}>OR</div>
                            <div className={cn("h2", styles.title)}>
                                Already joined?
                            </div>
                            <GetInvolvedButton
                                content="Connect Wallet to Continue"
                                buttonStyle={cn(
                                    "button",
                                    styles.getInvolvedButton,
                                )}
                                chainStyle={styles.chainButton}
                                wrapStyle={styles.getInvolvedButtonWrap}
                            />
                        </>
                    )}
                </div>
                {/* <div className={styles.images}>
                    <div className={styles.image}>
                        <Image
                            src="/images/lines-4.svg"
                            width={1578}
                            height={1585}
                            alt="Lines"
                        />
                    </div>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={index === 2 ? [-2, 10] : [4, -15]}
                            key={index}
                        >
                            <Image src={image} layout="fill" alt="Figure" />
                        </Parallax>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Main;
