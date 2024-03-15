import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "./NFTPage.module.sass";

const NFTPage = () => {
    return (
        <Layout>
            <div className={styles.section}>
                <div className={styles.container}>
                    <Image
                        src="/images/sft-blind-box-coming-soon.png"
                        alt="SFT Blind Box is Coming Soon!"
                        layout="fill"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default NFTPage;
