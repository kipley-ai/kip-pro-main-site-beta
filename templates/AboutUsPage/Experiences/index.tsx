import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Experiences.module.sass";
import Image from "@/components/Image";

type ExperiencesProps = {};

const Experiences = ({}: ExperiencesProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.comment}>
                <div className={styles.details}>
                    <div className={cn("h3", styles.subtitle)}>
                        Past Clients in AI & Data Work
                    </div>
                    <div className={cn("h2", styles.title)}>
                        We have executed & deployed <br /> 
                        AI / complex data projects since 2015
                    </div>
                    <div className={styles.images}>
                        {/* First row */}
                        <div className={styles.row}>
                            <Image src="/images/partner-logos/the-world-bank-logo-white.png" width={200} height={40} alt="Binance" />
                            <Image src="/images/partner-logos/Adam-Smith-logo.png" width={120} height={40} alt="OKX" />
                            <Image src="/images/partner-logos/Konrad-Adenauer-logo.png" width={100} height={30} alt="Amber" />
                            <Image src="/images/partner-logos/Richemont-logo.png" width={320} height={30} alt="Sea" />
                            <Image src="/images/partner-logos/kings-college-logo.png" width={95} height={50} alt="COL" />
                            <Image src="/images/partner-logos/Lee-Kuan-Yew-school-logo.png" width={120} height={40} alt="Visa" />
                            <Image src="/images/partner-logos/LVMH-logo-white.png" width={150} height={40} alt="EY" />
                        </div>
                        {/* Second row */}
                        <div className={styles.row}>
                            <Image src="/images/partner-logos/SG-prison-service-logo.png" width={125} height={40} alt="HSBC" />
                            <Image src="/images/partner-logos/Singapore-Tourism-Board.png" width={70} height={50} alt="Nami" />
                            <Image src="/images/partner-logos/seoul-national-university-logo.png" width={200} height={40} alt="Thomson" />
                            <Image src="/images/partner-logos/NUS-logo.png" width={90} height={40} alt="Deloitte" />
                            <Image src="/images/partner-logos/Motion-picture-logo.png" width={100} height={40} alt="Deloitte" />
                            <Image src="/images/partner-logos/Tedx-logo.png" width={140} height={40} alt="EIGENFORM" />
                            <Image src="/images/partner-logos/Swatch-group-logo.png" width={200} height={30} alt="EIGENFORM" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Experiences;
