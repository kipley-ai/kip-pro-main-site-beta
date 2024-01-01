import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";
import toast from "react-hot-toast";
import axios from "axios";
import { useAccount } from "wagmi";

const InvitationPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { address, isConnected } = useAccount();

    const handleValidateCode = async (code: string) => {
        if (!address) {
            toast.error("Please connect your wallet first.");
            return;
        }

        try {
            const response = await axios.post("/api/campaigns/validate-code", {
                wallet_address: address,
                invitation_code: code,
            });

            const data = response.data;

            if (response.status !== 200) {
                throw new Error();
            }

            if (data.is_ok) {
                setIsAuthenticated(true);
                sessionStorage.setItem("isAuthenticated", "true");
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error: any) {
            console.error("Error:", error.response.data.message);
            toast.error(error.response.data.message);
            throw error;
        }
    };

    useEffect(() => {
        const validateWallet = async () => {
            try {
                const response = await axios.post(
                    "/api/campaigns/validate-code",
                    {
                        wallet_address: address,
                        invitation_code: "",
                    },
                );

                const data = response.data;

                if (
                    data.is_ok &&
                    data.message === "Wallet already validated."
                ) {
                    // Check if the session storage is valid
                    const sessionIsAuthenticated =
                        sessionStorage.getItem("isAuthenticated");

                    if (sessionIsAuthenticated === null) {
                        // Set isAuthenticated to true and store it in sessionStorage
                        setIsAuthenticated(true);
                        sessionStorage.setItem("isAuthenticated", "true");
                        toast.success("Your wallet was already validated.", {
                            id: "validate-success",
                        });
                    } else {
                        // Session storage is already set, no need to set isAuthenticated again
                        setIsAuthenticated(true);
                    }
                }
            } catch (error: any) {
                console.error("Error:", error.response.data);
            }
        };

        if (isConnected) {
            validateWallet();
        }
    }, [isConnected, address]);

    return (
        <Layout>
            {isAuthenticated ? (
                <>
                    <Congratulations />
                    <Tasks />
                </>
            ) : (
                <Main handleValidateCode={handleValidateCode} />
            )}
        </Layout>
    );
};

export default InvitationPage;
