import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.preview}>
        <Image
          src="/images/blog-photo.jpg"
          layout="fill"
          objectFit="cover"
          alt="Blog"
        />
      </div>
      <div className={styles.wrap}>
        <div className={styles.stage}>Feature post</div>
        <div className={cn("h1", styles.title)}>
          Everything Onix weekly report
        </div>
        <div className={styles.content}>
          <p>Our knowledge and data drives the AI powered future.</p>
          <p>And it is being taken from us now as we speak.</p>
          <p>Create and secure your Knowledge Assets on the blockchain.</p>
          <p>Reclaim your ownership rights over your knowledge & data today.</p>
        </div>
        <Link href="/blog/article">
          <a className={cn("button", styles.button)}>
            <span>Read more</span>
          </a>
        </Link>
      </div>
    </div>
    <div className={styles.lines}>
      <Image src="/images/lines-1.svg" width={2100} height={1950} alt="Lines" />
    </div>
  </div>
);

export default Main;
