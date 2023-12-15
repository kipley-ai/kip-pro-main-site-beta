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
                            color="#89EB5B" // Provide a color value here
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
            </div>
        </div>
    );
};

export default Team;
