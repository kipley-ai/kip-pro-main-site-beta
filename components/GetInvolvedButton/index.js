import { useWeb3Context } from "./Web3Context";

const GetInvolvedButton = ({ buttonStyle }) => {
    const { connectToMetaMask, account } = useWeb3Context()

    return (
        <button
            disabled={account}
            className={buttonStyle}
            onClick={connectToMetaMask}
        >
            <span>{account ? "Connected" : "EARN KIP PTS"}</span>
        </button>
    );
};

export default GetInvolvedButton;
