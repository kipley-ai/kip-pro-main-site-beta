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
    <>
        <div
            className={cn("section", styles.section)}
            style={{
                background:
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/campaign-bg.png)",
                backgroundPosition: "center top",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    {/* <div className={styles.stage}>Contact us</div> */}
                    <div className={cn("h1", styles.title)}>
                        KIP Protocol is the first decentralised AI base layer.
                    </div>
                    {/* <Scroll
                    className={styles.scroll}
                    mouseClassName={styles.mouse}
                    title="SCROLL TO EXPLORE"
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    row
                /> */}
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-1.svg"
                        layout="fill"
                        alt="Lines"
                    />
                </div>
                <Parallax
                    className={styles.image}
                    speed={1}
                    easing="easeInQuad"
                    rotate={[2, -10]}
                >
                    <Image
                        src="/images/figures/nft-box.png"
                        layout="fill"
                        alt="Figure"
                    />
                </Parallax>
            </div>
            <WhiteButton />
        </div>
        <div className={cn("section", styles.section2)}>
            <div className={cn("container", styles.container2)}>
                <div className={styles.wrap2}>
                    {/* <div className={styles.stage}>Contact us</div> */}
                    <div className={cn("h1", styles.title)}>HOW TO START</div>
                    <div className={styles.info2}>
                        <p>
                            Earn points to redeem exclusive KIP NFT Blind Box.
                            <br />
                            1000 points to qualify for only 10,000 availability!
                            <br />
                            Blind Box unlocks 3 Tiers of Genesis NFTs for access
                            to airdrops and perks.
                        </p>
                        <br />
                        <p>
                            Step 1: Complete Activation and Cycle tasks <br />
                            Step 2: Recruit friends with Invite Codes <br />
                            Step 3: Participate in Discord and Twitter
                            engagement
                        </p>
                        <br />
                        <p>
                            Join the Adventure now! Dont miss out on the Genesis
                            NFT.
                        </p>
                    </div>
                    {/* <Scroll
                    className={styles.scroll}
                    mouseClassName={styles.mouse}
                    title="SCROLL TO EXPLORE"
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    row
                /> */}
                </div>
            </div>
            {/* <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-1.svg"
                        layout="fill"
                        alt="Lines"
                    />
                </div>
                <Parallax
                    className={styles.image}
                    speed={1}
                    easing="easeInQuad"
                    rotate={[2, -10]}
                >
                    <Image
                        src="/images/figures/nft-box.png"
                        layout="fill"
                        alt="Figure"
                    />
                </Parallax>
            </div>
            <WhiteButton /> */}
        </div>
    </>
);

export default Intro;
