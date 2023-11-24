import cn from "classnames";
import styles from "./UpToDate.module.sass";
import Image from "@/components/Image";

const list = [
  {
    title: "Vectorised Knowledge Bases",
    text: "Retrieval Augmented Generation (RAG) is going to play an increasing role in our use of AI. Turn your vectorised KBs into Knowledge Assets, and be remunerated fairly when AI users retrieve from it.",
  },
  {
    title: "Training Data",
    text: "Our human consciousness and knowledge leave imprints on the internet. The AI models need these imprints to improve. Set yourself up so they may engage with us fairly as partners, not pushovers.",
  },
];

type UpToDateProps = {};

const UpToDate = ({}: UpToDateProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.row}>
        <div className={styles.wrap}>
          <div className={cn("h2", styles.title)}>
            But we can reclaim our ownership rights
          </div>
          <div className={styles.info}>
            KIP empowers valuable knowledge and data to be protected and
            monetised as Knowledge Assets, ensuring interaction with AI without
            losing ownership.
          </div>
          <div className={styles.list}>
            {list.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={cn("h3", styles.number)}>{item.title}</div>
                <div className={styles.content}>{item.text}</div>
              </div>
            ))}
          </div>
          {/* <div className={styles.line}>
            <button className={cn("button", styles.button)}>
              <span>launch app</span>
            </button>
            <button className={styles.document}>Read the docs</button>
          </div> */}
        </div>
        <div className={styles.preview}>
          <Image
            src="/images/figures/figure-102.png"
            width={712}
            height={682}
            alt="Figure"
          />
        </div>
      </div>
    </div>
  </div>
);

export default UpToDate;
