import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";
import ProgressBar from "./ProgressBar";
import GetInvolvedButton from "@/components/GetInvolvedButton";

type MainProps = {
  scrollToRef?: any;
};

const Main = ({ scrollToRef }: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.wrap}>
        <div className={styles.stage}>We Are Mobilising</div>
        <div className={cn("h1", styles.title)}>Introducing KnowledgeFi</div>
        <div className={styles.info}>
          <p>
            Everyone should be empowered, through the systematic creation of
            true digital property rights, to unlock the full economic value of
            our Knowledge Assets.
          </p>
          <ProgressBar />
          {/* <button className={cn("button", styles["get-involved-button"])}>
            <span>Get Involved</span>
          </button> */}
          <GetInvolvedButton
            buttonStyle={cn("button", styles["get-involved-button"])}
          />
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
        <Image src="/images/figures/figure-107 (1).png" layout="fill" alt="Figure" />
      </Parallax>
    </div>
  </div>
);

export default Main;
