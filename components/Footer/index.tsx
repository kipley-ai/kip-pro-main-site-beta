import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
  <footer className={styles.footer}>
    <div className={cn("container-wide", styles.container)}>
      <div className={styles.row}>
        <h2 className={cn(styles["footer-text"], styles.title)}>YOUR KNOWLEDGE IS
          <span>
            <span>
              <span className={styles["text-cyan-glowy"]}>Property</span>
              <span className={styles["text-yellow-glowy"]}>Provenance</span>
              <span className={styles["text-magenta-glowy"]}>Power</span>
              <span className={styles["text-cyan-glowy"]}>Property</span>
            </span>
          </span> 
        </h2>
        <div className={styles.links}>
          <div>
            <p>Company</p>
            <a 
              href="https://www.kip.pro/solutions-data-knowledge-owner"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOLUTIONS
            </a>
            <a 
              href="https://www.kip.pro/blogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLOG
            </a>
            <a 
              href="https://www.kip.pro/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABOUT US
            </a>
            <a 
              href="https://www.kip.pro/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT US
            </a>
          </div>
          <div>
            <p>Community</p>
            <a 
              href="https://discord.com/invite/Hma2Y6RgND"
              target="_blank"
              rel="noopener noreferrer"
            >
                DISCORD
            </a>
            <a 
              href="https://twitter.com/KIPprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              TELEGRAM
            </a>
            <a 
              href="https://twitter.com/KIPprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.copyright}>© 2024 KIP. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
