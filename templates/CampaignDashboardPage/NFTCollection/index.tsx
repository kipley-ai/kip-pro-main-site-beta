import Layout from "@/components/Layout";
import styles from "./NFTCollection.module.sass";
import cn from "classnames";
import NFTCard from "./NFTCard";

const NFTCollection = () => {
    return (
        <div className={styles.container}>
            <h1 className={cn("h1", styles.title)}>NFT Collection</h1>
            <p className={cn("p", styles.subtitle)}>
                Follow us on Twitter today and experience the
                <br />
                power of Knowledge in your life!
            </p>
            <div className={styles.nftCards}>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </div>
        </div>
    );
};

export default NFTCollection;
