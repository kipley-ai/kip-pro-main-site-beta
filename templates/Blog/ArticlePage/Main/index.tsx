import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";

type MainProps = {};

const Main = ({}: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.wrap}>
        <div className={styles.line}>
          <div className={cn("status-green", styles.status)}>UPDATES</div>
          <div className={cn("status-dark", styles.date)}>2 aug 2022</div>
        </div>
        <h1 className={cn("h1", styles.title)}>
          Everything Onix weekly report
        </h1>
        <div className={cn("h4", styles.info)}>
          <p>Our knowledge and data drives the AI powered future.</p>
          <p>And it is being taken from us now as we speak.</p>
          <p>Create and secure your Knowledge Assets on the blockchain.</p>
          <p>Reclaim your ownership rights over your knowledge & data today.</p>
        </div>
        <div className={styles.avatar}>
          <Image
            src="/images/avatar-2.jpg"
            layout="fill"
            objectFit="cover"
            alt="Avatar"
          />
        </div>
        <div className={styles.author}>Becky Stal</div>
        <div className={styles.position}>Sr. Engineer - FauxChain</div>
      </div>
    </div>
    <div className={styles.lines}>
      <Image src="/images/lines-1.svg" width={2000} height={1900} alt="Lines" />
    </div>
  </div>
);

export default Main;
