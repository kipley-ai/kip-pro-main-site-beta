import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";
import { Player } from '@lottiefiles/react-lottie-player';

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.details}>
                {/* <div className={styles.counter}>1M</div>
                <div className={cn("h4", styles.info)}>KIP users</div> */}
            </div>
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <h2>The Great Knowledge Heist</h2>
                    <h3>They need our knowledge and data.</h3>
                    <p>
                    LLM models need to be trained on huge amounts of knowledge and data.
                    An industrial scale web-scraping exercise is on-going, 
                    and if you've ever written or published anything online, 
                    it's very likely that has already been integrated as a weight in an LLM.
                    </p>
                    <p>
                    Our knowledge and data has been absorbed to feed proprietary for-profit models.
                    No one asked us for permission and there is no way to opt-out.
                    </p>
                </div>
                {/* <Link href="/contact">
                    <a className={cn("button", styles.button)}>
                        <span>contact us</span>
                    </a>
                </Link> */}
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -15]}
            >
                <Player
                    autoplay
                    loop
                    src="images/figures/3d-icons-9.json"
                    style={{ height: '900px', width: '900px' }}
                    >
                </Player>
            </Parallax>
        </div>
    </div>
);

export default Details;
