"use client";
import Icon from "components/Icon";
import styles from "./WhiteButton.module.sass";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const WhiteButton = () => {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    return (
        <div className={styles.line}>
            <div className={styles.backArrow}>
                {isConnected ? (
                    <a className={styles.apply} href={"/leaderboard"}>
                        VIEW LEADERBOARD{" "}
                        <Icon name="arrow-right-2" size="26" />
                    </a>
                ) : (
                    openConnectModal && (
                        <button
                            className={styles.apply}
                            onClick={openConnectModal}
                        >
                            VIEW LEADERBOARD <Icon name="arrow-right-2" size="26" />
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default WhiteButton;
