import { useEffect, useState } from "react"
import { useWeb3Context } from "./Web3Context";

const GetInvolvedButton = ({ buttonStyle }) => {
    const { connectToMetaMask, account } = useWeb3Context()

    return (
        <button
            // disabled={account}
            className={buttonStyle}
            onClick={connectToMetaMask}
        >
            <span>{account ? "Connected" : "Get Involved"}</span>
        </button>
    );
};

export default GetInvolvedButton;
