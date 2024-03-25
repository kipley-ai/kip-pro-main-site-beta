import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "./NFTPage.module.sass";

const NFTPage = () => {
    return (
        <Layout>
            <div className={styles.section}>
                <Image
                    src="/images/sft-blind-box-coming-soon.png"
                    alt="SFT Blind Box is Coming Soon!"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </Layout>
    );
};

export default NFTPage;
