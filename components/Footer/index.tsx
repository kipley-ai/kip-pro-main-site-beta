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
        {/* <Logo className={styles.logo} /> */}
        <h1 className={styles.title}>
          YOUR KNOWLEDGE IS PROVENANCE
        </h1>
        {/* <div style={{ marginRight: "auto" }}>
          <Socials className={styles.socials} socials={socials} />
        </div> */}
        {/* <div className={styles.menu}>
          {footerNavigation.map((link, index) =>
            link.external ? (
              <a
                className={styles.link}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {link.title}
              </a>
            ) : (
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                href={link.url}
                key={index}
              >
                {link.title}
              </NavLink>
            )
          )}
        </div> */}
        <div className={styles.links}>
          <div>
            <p>Company</p>
            {/* <a>SOLUTIONS</a> */}
            <a 
              href="https://www.kip.pro/blogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLOGS
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
          {/* <div>
            <p>Legal</p>
            <a>TERMS & CONDITIONS</a>
            <a>PRIVACY</a>
          </div> */}
          <div>
            <p>Community</p>
            <a 
              href="https://discord.com/invite/Hma2Y6RgND"
              target="_blank"
              rel="noopener noreferrer"
            >
                DISCORD
            </a>
            {/* <a>TELEGRAM</a> */}
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
        {/* <div className={styles.documents}>
          {documents.map((document, index) => (
            <Link href={document.url} key={index}>
              <a className={styles.document}>{document.title}</a>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
