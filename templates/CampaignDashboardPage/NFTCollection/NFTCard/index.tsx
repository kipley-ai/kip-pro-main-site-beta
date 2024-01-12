import { useState } from "react";
import styles from "./NFTCard.module.sass";
import Image from "@/components/Image";

const NFTCard = () => {
    return (
        <div className={styles.nftCard}>
            <div className={styles.nftImageContainer}>
                <Image
                    className={styles.nftImage}
                    src="/images/nft/2.png"
                    layout="fill"
                    alt="NFT Image"
                />
            </div>
            <div className={styles.nftDetails}>
                <div className={styles.nftDetailsTop}>
                    <h2 className={styles.nftTitle}>Diehard BATTERY-SILVER</h2>
                    <p className={styles.nftAuthor}>By Ralph Edwards</p>
                </div>
                <div className={styles.nftPricing}>
                    <span className={styles.nftPriceLabel}>Price</span>
                    <div className={styles.nftPrice}>
                        <div className={styles.ethLogo}>
                            <Image
                                src="/images/ethereum-eth-logo.svg"
                                layout="fill"
                                alt="Ethereum logo"
                            />
                        </div>
                        <span className={styles.nftPriceValue}>0.39021</span>
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button}>Sell</button>
                <button className={styles.button}>Reveal NFT</button>
            </div>
        </div>
    );
};

export default NFTCard;
