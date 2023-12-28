import { useRef } from "react";
import Layout from "@/components/Layout";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";

const InvitationPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Congratulations />
            <Tasks />
        </Layout>
    );
};

export default InvitationPage;
