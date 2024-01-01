import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const GetInvolvedButton = ({ buttonStyle }) => {
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
                                            <span>Get Involved</span>
                                        </button>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button
                                            onClick={openChainModal}
                                            type="button"
                                        >
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: "flex", gap: 12 }}>
                                        <button
                                            onClick={openChainModal}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "white",
                                            }}
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
