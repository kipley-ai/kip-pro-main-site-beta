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
                        KIP Protocol is the first Web3 Base Layer for AI.
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
                    <div className={cn("h1", styles.title)}>HOW TO BEGIN</div>
                    <div className={styles.info2}>
                        <p>
                            Earn points to qualify and redeem exclusive KIP NFT
                            Blind Box!
                            <br />
                            Blind Box unlocks different tiers of Genesis NFTs
                            for guaranteed<br />access to airdrops and perks.
                        </p>
                        <br />
                        <p>
                            <span className={styles.step}>Step 1:</span>{" "}
                            Complete Activation and Cycle tasks on Galxe
                            <br />
                            <span className={styles.step}>Step 2:</span> Recruit
                            friends with Invite Codes <br />
                            <span className={styles.step}>Step 3:</span>{" "}
                            Participate in Discord and Twitter engagement
                        </p>
                        <br />
                        <p>
                            Join the adventure now! Dont miss out on the Genesis
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
