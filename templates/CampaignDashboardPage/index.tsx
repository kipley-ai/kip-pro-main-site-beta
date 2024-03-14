import toast from "react-hot-toast";
import Layout from "@/components/Layout";
import styles from "./Layout.module.sass";
import TabsHeader from "./Tabs";
import Leaderboard from "./Leaderboard";
import Invites from "./Invites";
import NFTCollection from "./NFTCollection";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

const CampaignDashboardPage = () => {
    const [tab, setTab] = useState("leaderboard");

    const router = useRouter();
    const { isConnected } = useAccount();

    if (process.browser) {
        if (!isConnected) {
            router.replace("/campaigns");
            toast.error("Please connect your wallet first.", {
                id: "not-connected",
            });
        }
    }

    return (
        <Layout>
            <div
                className={styles.container}
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/invite-bg.png)",
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Leaderboard />
            </div>
        </Layout>
    );
};

export default CampaignDashboardPage;
