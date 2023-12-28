import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Congratulations from "./Congratulations";
import Tasks from "./Tasks";

const InvitationPage = () => {
    const [hasLanded, setHasLanded] = useState(false);
    const scrollToRef = useRef(null);

    return (
        <Layout>
            {hasLanded ? (
                <>
                    <Congratulations />
                    <Tasks />
                </>
            ) : (
                <Main setHasLanded={setHasLanded} />
            )}
        </Layout>
    );
};

export default InvitationPage;
