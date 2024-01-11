import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Intro from "./Intro";
import Main from "./Main";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";
import toast from "react-hot-toast";
import axios from "axios";
import { useAccount } from "wagmi";

const InvitationPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { address, isConnected } = useAccount();

    const scrollToRef = useRef(null);

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
                        invitation_code: "TEST-CODE",
                    }
                );

                const data = response.data;

                if (
                    data.is_ok &&
                    data.message === "Wallet already validated."
                ) {
                    setIsAuthenticated(true);
                    if (address) {
                        sessionStorage.setItem("address", address);
                    }
                    toast.success(data.message, {
                        id: "validate-success",
                    });
                }
            } catch (error: any) {
                console.error("Error:", error.response.data);
            }
        };

        const storedAddress = sessionStorage.getItem("address");
        if (isConnected && storedAddress === address) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            validateWallet();
        }
    }, [isConnected, address]);

    return (
        <Layout>
            {/* {isAuthenticated ? (
                <>
                    <Intro scrollToRef={scrollToRef} />
                    <Congratulations scrollToRef={scrollToRef} />
                    <Tasks />
                </>
            ) : (
                <Main handleValidateCode={handleValidateCode} />
            )} */}
            <>
                <Intro scrollToRef={scrollToRef} />
                <Congratulations scrollToRef={scrollToRef} />
                <Tasks />
            </>
        </Layout>
    );
};

export default InvitationPage;
