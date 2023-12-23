import React, { useState } from "react";
import Link from "next/link";
import styles from "./Banner.module.sass";

const Banner: React.FC = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    const handleCloseBanner = () => {
        setIsBannerVisible(false);
    };

    return (
        <>
            {isBannerVisible && (
                <div className={styles.banner}>
                    <p className={styles.text}>
                        KIP Protocol has won the 🏆&nbsp;
                        <Link href="https://x.com/KIPprotocol/status/1738085077106782475">
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tencent Cloud Prize at the 2023 Chainlink
                                Constellation Hackathon
                            </a>
                        </Link>
                    </p>
                    <button
                        className={styles.closeButton}
                        onClick={handleCloseBanner}
                    >
                        &#10006;
                    </button>
                </div>
            )}
        </>
    );
};

export default Banner;
