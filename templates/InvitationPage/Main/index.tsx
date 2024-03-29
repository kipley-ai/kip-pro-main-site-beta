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

    const handlePaste = (event: any) => {
        event.preventDefault();

        const clipboardData =
            event.clipboardData || (window as any).clipboardData;
        let clipboardText = clipboardData.getData("text").trim().toUpperCase();

        if (clipboardText.length > 5) {
            clipboardText = clipboardText.slice(0, 5);
        }

        const otpArray = Array(5).fill("");

        for (let i = 0; i < clipboardText.length; i++) {
            otpArray[i] = clipboardText[i];
        }

        setOtp(otpArray);

        const lastFilledInputIndex = otpArray.lastIndexOf(
            clipboardText.slice(-1),
        );
        const firstBlankInputIndex = otpArray.findIndex(
            (value) => value === "",
        );

        if (lastFilledInputIndex !== -1) {
            if (lastFilledInputIndex < 4) {
                inputsRef.current[lastFilledInputIndex + 1]?.focus();
            } else {
                inputsRef.current[lastFilledInputIndex]?.blur();
            }
        } else if (firstBlankInputIndex !== -1) {
            inputsRef.current[firstBlankInputIndex]?.focus();
        }
    };

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }

        window.addEventListener("paste", handlePaste);

        return () => {
            window.removeEventListener("paste", handlePaste);
        };
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
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
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
                                        onPaste={handlePaste}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            onClick={() => handleValidateCode(otp.join(""))}
                            className={cn("button", styles.getInvolvedButton)}
                            disabled={isBlankPresent}
                        >
                            <span>JOIN NOW</span>
                        </button>
                    </div>
                    {!isConnected && (
                        <>
                            <div className={cn("p", styles.or)}>OR</div>
                            <div className={cn("p", styles.already)}>
                                Already joined?
                            </div>
                            <GetInvolvedButton
                                content="Connect Wallet"
                                buttonStyle={cn(
                                    "button",
                                    styles.getInvolvedButton,
                                )}
                                chainStyle={styles.chainButton}
                                wrapStyle={styles.getInvolvedButtonWrap}
                            />
                            <div className={styles.connectWarning}>
                                <Image
                                    src="/images/circle-warning.svg"
                                    className={styles.connectWarningIcon}
                                    width={15}
                                    height={15}
                                    alt="Warning Icon"
                                />
                                <p>
                                    For Existing Galxe users:
                                    <br />
                                    Please use the same wallet to connect
                                </p>
                            </div>
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
