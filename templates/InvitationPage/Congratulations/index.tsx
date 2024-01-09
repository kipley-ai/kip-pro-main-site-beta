import cn from "classnames";
import styles from "./Congratulations.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Link from "next/link";
import WhiteButton from "@/components/WhiteButton";
import CampaignPic2 from "public/images/campaign-pic-2.jpg";

const getCurrentDate = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};

const posts = [
    {
        title: "Activation Tasks",
        date: getCurrentDate(),
        image: CampaignPic2,
        status: "FEATURES",
        url: "https://galxe.com/KIPProtocol/campaign/GCnjsttqXn",
        color: "#01F7FF",
    },
];

type CongratulationsProps = {
    scrollToRef: any;
};

const Congratulations = ({ scrollToRef }: CongratulationsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={styles.backgroundGradient}></div>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            {/* <div className={cn("h2", styles.title)}>Activation Tasks</div> */}
            {posts.map((item, index) => (
                <Card
                    className={styles.card}
                    cornerCardClass={styles.corner}
                    backgroundCardClass={styles.backgroundCard}
                    squareCardClass={styles.square}
                    innerCardClass={styles.inner}
                    color={item.color}
                    key={index}
                    url={item.url}
                    externalUrl
                >
                    <div className={styles.details}>
                        {/* <div
                                        className={cn("status", styles.status)}
                                        style={{ color: item.color }}
                                    >
                                        {item.status}
                                    </div> */}
                        <div className={cn("h4", styles.subtitle)}>
                            {item.title}
                            <Icon
                                name="arrow-right"
                                className={styles.rightArrow}
                                fill="#FFF"
                                size="26"
                            />
                        </div>
                        {/* <div className={styles.line}>
                                        <div className={styles.date}>
                                            {item.date}
                                        </div>
                                        <Icon
                                            className={styles.arrow}
                                            name="arrow-right"
                                            size="26"
                                        />
                                    </div> */}
                        {/* <div className={styles.previewCard}>
                                        <Image
                                            src={CampaignPic2}
                                            // width={580}
                                            // height={329}
                                            objectFit="cover"
                                            alt={item.title}
                                        />
                                    </div> */}
                    </div>
                </Card>
            ))}
            <div className={styles.wrap}>
                {/* <div className={cn("h2", styles.title)}></div> */}
                <div className={styles.info}>
                    <p>
                        Kickstart Genesis campaign with points from completing
                        Activation tasks.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Congratulations;
