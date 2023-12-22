import { useRef } from "react";
import Layout from "@/components/Layout";
import Question from "./Question";
import { SemanticProvider } from "./Question/ChatModal/semantic-context";

const ChatPage = () => {
    const scrollToRef = useRef(null);

    return (
        <SemanticProvider>
            <Layout>
                <Question />
            </Layout>
        </SemanticProvider>
    );
};

export default ChatPage;
