import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Knowledge: NextPage = () => {
    return (
        <Layout>
            <div
                style={{
                    marginTop: 100,
                    width: "100%",
                    height: "100vh",
                    padding: 50,
                }}
            >
                <iframe
                    src={process.env.NEXT_PUBLIC_KF_CREATE}
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </Layout>
    );
};

export default Knowledge;
