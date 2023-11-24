import { Web3 } from "web3";

const GetInvolvedButton = ({ buttonStyle }) => {
    const connectToMetaMask = async () => {
        // Check if MetaMask is installed
        if (window.ethereum) {
            try {
                // Request access to the user's MetaMask accounts
                await window.ethereum.enable();
                console.log("Connected to MetaMask!");

                // Now you can use Web3 to interact with the user's wallet
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                const account = accounts[0]

                const domain = window.location.host;
                const message = `${domain} wants you to sign in with your Ethereum account:\n${account}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`;

                // Sign the message with MetaMask
                const signature = await web3.eth.personal.sign(message, account, '');
                console.log("signature", signature)

                // Perform your sign-in logic here, for example, set a session or JWT token
                // You can also send the message and signature to your server for authentication
            } catch (error) {
                console.error("Error connecting to MetaMask:", error);
            }
        } else {
            console.error("MetaMask not installed");
        }
    };

    return (
        <button
            className={buttonStyle}
            onClick={connectToMetaMask}
        >
            <span>Get Involved</span>
        </button>
    );
};

export default GetInvolvedButton;
