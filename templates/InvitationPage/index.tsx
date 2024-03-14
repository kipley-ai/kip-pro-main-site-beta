import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Intro from "./Intro";
import Tasks from "./Tasks";

const InvitationPage = () => {
    return (
        <Layout>
            <Intro />
            <Tasks />
        </Layout>
    );
};

export default InvitationPage;
