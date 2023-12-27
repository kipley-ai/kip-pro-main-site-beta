import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Field from "@/components/Field";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-5.png",
];

type MainProps = {};

const Main = ({}: MainProps) => {
    const [question, setQuestion] = useState("");

    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    {/* <div className={styles.stage}>join onix</div> */}
                    <div className={cn("h2", styles.title)}>
                        Do you have invite code?
                    </div>
                    <div className={styles.info}>
                        <p>Enter your invite code here</p>
                    </div>
                    <div className={styles.input}>
                        <Field
                            className={styles.field}
                            placeholder="XXX XXX"
                            value={question}
                            onChange={(e: any) => setQuestion(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <a
                            className={cn("button", styles.button)}
                            href="https://linktr.ee/kip.pro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>APPLY</span>
                        </a>
                    </div>
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
