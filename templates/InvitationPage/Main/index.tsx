import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Field from "@/components/Field";
import Link from "next/link";
import GetInvolvedButton from "@/components/GetInvolvedButton";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-5.png",
];

type MainProps = { handleValidateCode: (code: string) => void };

const Main = ({ handleValidateCode }: MainProps) => {
    const [code, setCode] = useState("");

    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        Welcome to KIP Protocol!
                        <br />
                    </div>
                    <div className={cn("p", styles.subtitle)}>
                        Begin your mission to earn our coveted collectibles.
                    </div>
                    {/* <div className={styles.info}>
                        <p>Enter your invite code here</p>
                    </div> */}
                    <div className={styles.input}>
                        <Field
                            className={styles.field}
                            placeholder="Enter your invite code here"
                            value={code}
                            onChange={(e: any) => setCode(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <a
                            onClick={() => handleValidateCode(code)}
                            className={cn("button", styles.button)}
                        >
                            <span>APPLY</span>
                        </a>
                    </div>
                    <div className={cn("p", styles.subtitle)}>OR</div>
                    <div className={cn("h2", styles.title)}>
                        Already joined?
                    </div>
                    {/* <div className={styles.buttons}>
                        <a
                            onClick={() => handleValidateCode(code)}
                            className={cn("button", styles.button)}
                        >
                            <span>Connect Wallet to Continue</span>
                        </a>
                    </div> */}
                    <GetInvolvedButton
                        content="Connect Wallet to Continue"
                        buttonStyle={cn("button", styles.getInvolvedButton)}
                        chainStyle={styles.chainButton}
                        wrapStyle={styles.getInvolvedButtonWrap}
                    />
                </div>
                <div className={styles.images}>
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
                </div>
            </div>
        </div>
    );
};

export default Main;
