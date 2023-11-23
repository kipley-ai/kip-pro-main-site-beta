import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";

type MainProps = {
  scrollToRef?: any;
};

const Main = ({ scrollToRef }: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.wrap}>
        <div className={styles.stage}>about us</div>
        <div className={cn("h1", styles.title)}>Onix Fintech</div>
        <div className={styles.info}>
          <p>Our knowledge and data drives the AI powered future.</p>
          <p>And it is being taken from us now as we speak.</p>
          <p>Create and secure your Knowledge Assets on the blockchain.</p>
          <p>Reclaim your ownership rights over your knowledge & data today.</p>
        </div>
        {scrollToRef ? (
          <Scroll
            className={styles.scroll}
            title="SCROLL TO EXPLORE"
            onScroll={() =>
              scrollToRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            row
          />
        ) : null}
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
        <Image src="/images/figures/figure-3.png" layout="fill" alt="Figure" />
      </Parallax>
    </div>
  </div>
);

export default Main;
