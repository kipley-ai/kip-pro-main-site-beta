import { useRef } from "react";
import Layout from "@/components/Layout";
import Congratulations from "./Congratulations";

const InvitationPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Congratulations />
        </Layout>
    );
};

export default InvitationPage;
