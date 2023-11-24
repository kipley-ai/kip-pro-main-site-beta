import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import Typewriter from './Typewriter';

const images = [
  "/images/figures/figure-103 (1).png",
  "/images/figures/figure-102.png",
  "/images/figures/figure-101.png",
  "/images/figures/figure-104 (1).png",
  "/images/figures/figure-105 (1).png",
  "/images/figures/figure-107 (1).png",
];

type MainProps = {
  scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.head}>
        <div className={styles.stage}>Towards Decentralised AI</div>
        <div className={cn("h1", styles.title)}>Your Knowledge is</div>
        {/* <div className={cn("container", styles.wrapper)}>
          <div className={cn("container", styles.words)}>
            <span className={cn("h1", styles.word)}>Power</span>
            <span className={cn("h1", styles.word)}>Property</span>
            <span className={cn("h1", styles.word)}>Provenance</span>
          </div>
        </div> */}
        <Typewriter />
        <div className={styles.info}>
          <p>Our knowledge and data drives the AI powered future.</p>
          <p>And it is being taken from us now as we speak.</p>
          <p>Create and secure your Knowledge Assets on the blockchain.</p>
          <p>Reclaim your ownership rights over your knowledge & data today.</p>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            src="/images/lines.svg"
            width={1578}
            height={1585}
            alt="Lines"
          />
        </div>
        {images.map((image, index) => (
          <Parallax
            className={styles.image}
            speed={1}
            easing="easeInQuad"
            rotate={index === 2 ? [2, -10] : [-4, 15]}
            key={index}
          >
            <Image src={image} layout="fill" alt="Figure" />
          </Parallax>
        ))}
      </div>
      <Scroll
        className={styles.scroll}
        title="SCROLL TO EXPLORE"
        onScroll={() =>
          scrollToRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
    </div>
  </div>
);

export default Main;
