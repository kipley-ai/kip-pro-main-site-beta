import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Team.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";

import { team } from "@/constants/team";

type TeamProps = {};

const Team = ({}: TeamProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h3", styles["small-title"])}>
                        Meet the KIP team
                    </div>
                    <div className={cn("h2", styles.title)}>
                        Web3 Natives,
                    </div>
                    <div className={cn("h2", styles.title)}>
                        Building the future of AI
                    </div>
                </div>
                <div className={styles.list}>
                    {team.map((man, index) => (
                        <Card
                            className={styles.card}
                            color="#89EB5B"
                            key={index}
                            animateIn="fadeInDown"
                        >
                            <div className={styles["card-heading"]}>
                                <div className={styles.photo}>
                                    <Image src={man.image} width={100} height={100} alt="Figure" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div className={cn("p", styles.subtitle)}>{man.name}</div>
                                    <div className={cn("p", styles.position)}>{man.position}</div>
                                    </div>
                                </div>
                                <div className={styles.content}>{man.content}</div>
                                <div className={styles.preview}>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className={styles.comment}>
                    <div className={styles.details}>
                        <div className={cn("h3", styles.small)}>
                            Our team has experience from:
                        </div>
                        <div className={styles.images}>
                            {/* First row */}
                            <div className={styles.row}>
                                <Image src="/images/employer-logos/Binance-logo.png" width={200} height={40} alt="Binance" />
                                <Image src="/images/employer-logos/OKX-logo.png" width={120} height={40} alt="OKX" />
                                <Image src="/images/employer-logos/Amber-logo-white.png" width={170} height={30} alt="Amber" />
                                <Image src="/images/employer-logos/Sea-logo.png" width={110} height={40} alt="Sea" />
                                <Image src="/images/employer-logos/COL-logo.png" width={65} height={40} alt="COL" />
                                <Image src="/images/employer-logos/Visa-logo.png" width={120} height={40} alt="Visa" />
                                <Image src="/images/employer-logos/EY-logo.png" width={40} height={40} alt="EY" />
                            </div>
                            {/* Second row */}
                            <div className={styles.row}>
                                <Image src="/images/employer-logos/HSBC-logo.png" width={55} height={40} alt="HSBC" />
                                <Image src="/images/employer-logos/Nami-logo.png" width={80} height={45} alt="Nami" />
                                <Image src="/images/employer-logos/Thomson-logo.png" width={270} height={40} alt="Thomson" />
                                <Image src="/images/employer-logos/Deloitte-logo.png" width={170} height={30} alt="Deloitte" />
                                <Image src="/images/employer-logos/EIGENFORM-logo.png" width={260} height={30} alt="EIGENFORM" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
