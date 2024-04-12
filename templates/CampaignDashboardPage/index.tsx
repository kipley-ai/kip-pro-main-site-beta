import axios from "axios";
import toast from "react-hot-toast";
import Layout from "@/components/Layout";
import styles from "./Layout.module.sass";
import stylesLeaderboard from "./Leaderboard/Leaderboard.module.sass";
import TabsHeader from "./Tabs";
import Leaderboard from "./Leaderboard";
import Invites from "./Invites";
import NFTCollection from "./NFTCollection";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import LoadingIcon from "public/loading-01.svg";
import Image from "next/image";

const LeaderboardTitle=()=> {
    return (
        <>
        <div className={stylesLeaderboard.leaderboardText}>Leaderboard</div>
        <div className={stylesLeaderboard.ledUpdated}>
            {/* <Image
                className={stylesLeaderboard.loading_icon}
                src={LoadingIcon}
                width={12}
                height={12}
                alt="loading"
            /> */}
            {/* &nbsp;&nbsp; */}
            <h1>Updated every 12 hours</h1>
        </div>
        <h2 style={{marginLeft:0}}className={stylesLeaderboard.pleaseNote}>Please note that below leaderboard only display quests from Galxe.</h2>
        </>
    )
}

const CampaignDashboardPage = () => {
    const [tab, setTab] = useState("leaderboard");

    const router = useRouter();
    const { address, isConnected } = useAccount();

    if (process.browser) {
        if (!isConnected) {
            router.replace("/campaigns");
            toast.error("Please connect your wallet first.", {
                id: "not-connected",
            });
        }
    }

    useEffect(() => {
        const validateWallet = async () => {
            if (address) {
                const response = await axios.post(
                    "/api/campaigns/validate-code",
                    {
                        wallet_address: address,
                        invitation_code: "NO-CODE",
                    },
                );
            }
        };
        validateWallet();
    }, [address]);

    return (
        <Layout>
            <div
                className={styles.container}
                style={{
                    // background:
                    //     "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/invite-bg.png)",
                    backgroundColor: "#16181A",
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <LeaderboardTitle/>
                <TabsHeader tab={tab} setTab={setTab}/>
                <Leaderboard /> 
            </div>
        </Layout>
    );
};

export default CampaignDashboardPage;
