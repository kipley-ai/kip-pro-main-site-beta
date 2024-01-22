import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import cn from "classnames";
import styles from "./GetInvolvedButton.module.sass";
import { useRouter } from "next/router";

type GetInvolvedButtonProps = {
    buttonStyle?: string;
    chainStyle?: string;
    wrapStyle?: string;
    content?: string;
};

const GetInvolvedButton = ({ buttonStyle, chainStyle, wrapStyle, content }: GetInvolvedButtonProps) => {
    const { pathname } = useRouter();
    return (
        <>
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    mounted,
                }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;

                    return (
                        <div
                            {...(!ready && {
                                "aria-hidden": true,
                                style: {
                                    opacity: 0,
                                    pointerEvents: "none",
                                    userSelect: "none",
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <button
                                            className={buttonStyle}
                                            onClick={openConnectModal}
                                        >
                                            <span>
                                                {content
                                                    ? content
                                                    : "Connect Wallet"}
                                            </span>
                                        </button>
                                    );
                                }

                                if (chain.unsupported && pathname !== "/chat-with-kols") {
                                    return (
                                        <button
                                            onClick={openChainModal}
                                            className={styles.wrongNetwork}
                                            type="button"
                                        >
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div className={wrapStyle}>
                                        <button
                                            onClick={openChainModal}
                                            className={chainStyle}
                                            type="button"
                                        >
                                            {chain.hasIcon && (
                                                <div
                                                    style={{
                                                        background:
                                                            chain.iconBackground,
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 999,
                                                        overflow: "hidden",
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    {chain.iconUrl && (
                                                        <Image
                                                            src={chain.iconUrl}
                                                            alt={
                                                                chain.name ??
                                                                "Chain icon"
                                                            }
                                                            width={12}
                                                            height={12}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            {chain.name}
                                        </button>

                                        <button
                                            className={buttonStyle}
                                            onClick={openAccountModal}
                                        >
                                            <span>Connected</span>
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </>
    );
};

export default GetInvolvedButton;
