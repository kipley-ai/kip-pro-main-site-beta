import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import Solutions from "./Solutions";
import JoinCommunity from "./JoinCommunity";

const DeveloperHubPage = () => {
    return (
        <Layout>
            <Main />
            <Development />
            <Solutions />
            <JoinCommunity title="Interested in building with KIP Protocol?" />
        </Layout>
    );
};

export default DeveloperHubPage;
