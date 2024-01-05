import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Intro.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import WhiteButton from "@/components/WhiteButton";

type IntroProps = {
    scrollToRef: any;
};

const Intro = ({ scrollToRef }: IntroProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                {/* <div className={styles.stage}>Contact us</div> */}
                <div className={cn("h1", styles.title)}>
                    KIP Protocol is the first decentralised AI base layer.
                </div>
                <div className={styles.info}>
                    {/* <p>Our knowledge and data drives the AI powered future.</p>
                    <p>And it is being taken from us now as we speak.</p>
                    <p>
                        Create and secure your Knowledge Assets on the
                        blockchain.
                    </p>
                    <p>
                        Reclaim your ownership rights over your knowledge & data
                        today.
                    </p> */}
                </div>
                <Scroll
                    className={styles.scroll}
                    mouseClassName={styles.mouse}
                    title="SCROLL TO EXPLORE"
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    row
                />
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image src="/images/lines-1.svg" layout="fill" alt="Lines" />
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-107 (1).png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
        <WhiteButton />
    </div>
);

export default Intro;
