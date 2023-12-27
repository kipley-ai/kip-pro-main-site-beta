import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";

const InvitationPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main />
        </Layout>
    );
};

export default InvitationPage;
