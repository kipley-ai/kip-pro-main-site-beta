import { useRef } from "react";
import Layout from "@/components/Layout";
import InvitationCodes from "./InvitationCodes";
import Leaderboard from "./Leaderboard";
import Faq from "./Faq";
import WhiteButton from "@/components/WhiteButton";

const LeaderboardPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <InvitationCodes scrollToRef={scrollToRef} />
            {/* <Leaderboard /> */}
            {/* <Faq /> */}
        </Layout>
    );
};

export default LeaderboardPage;
