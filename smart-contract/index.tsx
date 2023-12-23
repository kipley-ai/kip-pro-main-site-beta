import KIPContractABI from "./KIP_demo_abi.json";
import { ethers } from "ethers";

export async function getContract() {
  const contractAddress = process.env.NEXT_PUBLIC_KIP_CONTRACT_ADDRESS!;
  const contractProvider = new ethers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_KIP_CONTRACT_API || "http://127.0.0.1:8545/"
  );

  const signerProvider = new ethers.BrowserProvider(window.ethereum);
  const signer = await signerProvider.getSigner();

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

  return { contractRead, contractWrite };
}
