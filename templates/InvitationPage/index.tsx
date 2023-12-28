import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";
import toast from "react-hot-toast";
import { useWeb3Context } from "@/components/GetInvolvedButton/Web3Context";

const InvitationPage = () => {
    const [hasLanded, setHasLanded] = useState<boolean>(false);
    const scrollToRef = useRef(null);
    const { account } = useWeb3Context();

    const handleValidateCode = async (code: string) => {
        if (!account) {
            toast.error("Please connect your wallet first.");
            return;
        }

        try {
            const res = await fetch("/api/campaigns/validate-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    wallet_address: account,
                    invitation_code: code,
                }),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();

            if (data.is_ok) {
                setHasLanded(true);
                toast.success("Invite code successfully applied!");
                localStorage.setItem("hasLanded", "true");
            } else {
                if (data.message === "Wallet already validated.") {
                    toast.error("Wallet already validated.");
                } else {
                    toast.error("Invite code is expired.");
                }
            }
        } catch (error) {
            console.error("Error calling the API:", error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("hasLanded")) {
            setHasLanded(true);
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
