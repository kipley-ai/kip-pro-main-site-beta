import { useRef } from "react";
import Layout from "@/components/Layout";
import Question from "./Question";

const ChatPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Question />
        </Layout>
    );
};

export default ChatPage;
