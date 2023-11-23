import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

const images = [
  "/images/figures/figure-1.png",
  "/images/figures/figure-2.png",
  "/images/figures/figure-5.png",
];

type MainProps = {};

const Main = ({}: MainProps) => (
  <div className={styles.section}>
    <div className={cn("container", styles.container)}>
      <div className={styles.wrap}>
        <div className={styles.stage}>join onix</div>
        <div className={cn("h1", styles.title)}>We are hiring</div>
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
            src="/images/lines-4.svg"
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
            rotate={index === 2 ? [-2, 10] : [4, -15]}
            key={index}
          >
            <Image src={image} layout="fill" alt="Figure" />
          </Parallax>
        ))}
      </div>
    </div>
  </div>
);

export default Main;
