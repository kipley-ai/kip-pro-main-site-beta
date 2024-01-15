import { ethers } from "ethers";
import abi from "./abi.json";
import { getSigner } from "..";

export async function getKipAirdropContract() {
    const contractAddress = "0xca03fc4bc66658c5530347abec630ce5168b117b"; //process.env.NEXT_PUBLIC_KIP_CONTRACT_ADDRESS!;
    // const contractProvider = new ethers.JsonRpcProvider(
    //     process.env.NEXT_PUBLIC_KIP_CONTRACT_API ||
    //         "https://polygon-mumbai.g.alchemy.com/v2/tOGMgTXPR3W7cl67uDprwaYuLhT5FKH1" // "http://127.0.0.1:8545/"
    // );

    const signer = await getSigner();

    // const contractRead = new ethers.Contract(
    //     contractAddress,
    //     abi,
    //     contractProvider
    // ); // Read only
    const contractWrite = new ethers.Contract(contractAddress, abi, signer); // Write only

    return { contractWrite };
}

export async function redeemNft() {
    const signer = await getSigner();
    const { contractWrite } = await getKipAirdropContract();

    return await contractWrite.safeMint(signer.address);
}

export async function revealNft(tokenId: string | number) {
    const { contractWrite } = await getKipAirdropContract();

    return await contractWrite.revealPrize(tokenId);
}

export async function setMinter(address: string, status: boolean) {
    const { contractWrite } = await getKipAirdropContract();

    return await contractWrite.setMinter(address, status);
}

export async function revealPrize(tokenId: string | number) {
    const { contractWrite } = await getKipAirdropContract();

    return await contractWrite.revealPrize(tokenId);
}

export async function getNFTSOwner() {
    const signer = await getSigner();
    const res = await fetch(`/api/nft?address=${signer.address}`);
    console.log("res", await res.json());
}
