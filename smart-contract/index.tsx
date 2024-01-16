import KIPContractABI from "./KIP_pay_demo_abi.json";
import ERC20ABI from "./ERC20_demo_abi.json"; //

import { ethers } from "ethers";

export async function getContract() {
    const contractAddress = "0x757822612Ee772aD1311f1e662fF44AE0509E9e8"; //process.env.NEXT_PUBLIC_KIP_CONTRACT_ADDRESS!;
    const contractProvider = new ethers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_KIP_CONTRACT_API ||
            "https://polygon-mumbai.g.alchemy.com/v2/tOGMgTXPR3W7cl67uDprwaYuLhT5FKH1" // "http://127.0.0.1:8545/"
    );

    const signerProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await signerProvider.getSigner();

    console.log("define success");

    const contractRead = new ethers.Contract(
        contractAddress,
        KIPContractABI,
        contractProvider
    ); // Read only
    const contractWrite = new ethers.Contract(
        contractAddress,
        KIPContractABI,
        signer
    ); // Write only
    const contractApprv = new ethers.Contract(
        "0x77ee906b188b4106b83d530f761797c91cefbab0",
        ERC20ABI,
        signer
    );

    return { contractRead, contractWrite, contractApprv };
}

export const getSigner = async () => {
    const signerProvider = new ethers.BrowserProvider(window.ethereum);
    return await signerProvider.getSigner();
};
