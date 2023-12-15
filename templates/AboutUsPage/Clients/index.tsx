import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Clients.module.sass";
import Image from "@/components/Image";

import { description, images } from "@/constants/testimonial";

type ClientsProps = {};

const Clients = ({}: ClientsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.comment}>
                <div className={styles.details}>
                    <div className={cn("h2", styles.title)}>
                        New, but already Trusted.
                    </div>
                    <div className={styles.images}>
                        <div className={styles.image}>
                            <Image
                            src="/images/top-three-logos/animoca-ventures-logo.png"
                            layout="fill"
                            objectFit="contain" // Use 'contain' to maintain aspect ratio and fit inside the container
                            alt="Avatar"
                            />
                        </div>
                        <div className={styles.tistr}>
                            <Image
                            src="/images/top-three-logos/tistr-logo.png"
                            layout="fill"
                            objectFit="contain" // Use 'cover' to cover the container while maintaining aspect ratio
                            alt="Avatar"
                            />
                        </div>
                        <div className={styles.image}>
                            <Image
                            src="/images/top-three-logos/anomaly-logo.png"
                            layout="fill"
                            objectFit="cover" // Use 'cover' or 'contain' as appropriate for each logo
                            alt="Avatar"
                            />
                        </div>
                    </div>
                    <div className={styles.position}>
                        Clients of apps running on KIP Protocol
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Clients;
