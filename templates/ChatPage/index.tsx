import { useRef } from "react";
import Layout from "@/components/Layout";
import Question from "./Question";
import JoinCommunity from "@/components/JoinCommunity";

const ChatPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Question />
            <JoinCommunity title="Read our whitepaper" />
        </Layout>
    );
};

export default ChatPage;
