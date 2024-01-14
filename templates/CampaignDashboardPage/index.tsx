import Layout from "@/components/Layout";
import styles from "./Layout.module.sass";
import TabsHeader from "./Tabs";
import Leaderboard from "./Leaderboard";
import Invites from "./Invites";
import NFTCollection from "./NFTCollection";
import { useState } from "react";

const CampaignDashboardPage = () => {
    const [tab, setTab] = useState("invites");

    return (
        <Layout>
            <div className={styles.container}>
                <TabsHeader tab={tab} setTab={setTab}/>
                {
                    tab === "invites" ? 
                    <Invites /> 
                    : tab === "leaderboard" ? 
                    <Leaderboard /> 
                    : tab === "nftcollection" ?
                    <NFTCollection />
                    : null
                }
            </div>
        </Layout>
    );
};

export default CampaignDashboardPage;
