import Layout from "@/components/Layout";
import styles from "./Layout.module.sass";
import TabsHeader from "./Tabs";
import Leaderboard from "./Leaderboard";

const CampaignDashboardPage = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <TabsHeader />
                <Leaderboard />
            </div>
        </Layout>
    );
};

export default CampaignDashboardPage;
