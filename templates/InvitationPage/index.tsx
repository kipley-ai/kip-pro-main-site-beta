import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";
import toast from "react-hot-toast";
import axios from "axios";
import { useWeb3Context } from "@/components/GetInvolvedButton/Web3Context";

const InvitationPage = () => {
    const [hasLanded, setHasLanded] = useState<boolean>(false);
    const { account } = useWeb3Context();

    const validateWallet = async () => {
        if (!account) {
            toast.error("Please connect your wallet first.");
            return;
        }

        try {
            const response = await axios.post("/api/campaigns/validate-code", {
                wallet_address: account,
                invitation_code: "",
            });

            const data = response.data;

            if (data.is_ok && data.message === "Wallet already validated.") {
                setHasLanded(true);
                localStorage.setItem("hasLanded", "true");
                toast.success("Your wallet has been validated.");
            }
        } catch (error: any) {
            console.error("Error:", error.response.data.message);
        }
    };

    const handleValidateCode = async (code: string) => {
        if (!account) {
            toast.error("Please connect your wallet first.");
            return;
        }

        try {
            const response = await axios.post("/api/campaigns/validate-code", {
                wallet_address: account,
                invitation_code: code,
            });

            const data = response.data;

            if (response.status !== 200) {
                throw new Error();
            }

            if (data.is_ok) {
                setHasLanded(true);
                localStorage.setItem("hasLanded", "true");
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
        if (localStorage.getItem("hasLanded")) {
            setHasLanded(true);
        } else {
            validateWallet();
        }
    }, []);

    return (
        <Layout>
            {hasLanded ? (
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
