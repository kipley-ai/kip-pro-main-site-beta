import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";
import Link from 'next/link';

import { headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import GetInvolvedButton from "@/components/GetInvolvedButton";
import { Web3Provider } from "@/components/GetInvolvedButton/Web3Context";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useScrollPosition(({ currPos }) => {
    setHeaderStyle(currPos.y <= -2);
  });

  return (
    <Web3Provider>
      <header
        className={cn(
          {
            [styles.visible]: headerStyle,
            [styles.open]: open,
          },
          styles.header
        )}
      >
        <div
          className={cn("container-wide", styles.container)}
          data-scroll-lock-scrollable
          data-scroll-lock-fill-gap
        >
          <Logo className={styles.logo} />
          <div className={styles.links}>
            <Link href="/about-us">
              <a className={cn("a", styles.link)}>
                <span className={styles["link-text"]}>About Us</span>
              </a>
            </Link>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linktr.ee/kip.pro"
              className={cn("a", styles.link)}
            >
              <span className={styles["link-text"]}>Community</span>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://kipprotocol.gitbook.io/wp/"
              className={cn("a", styles.link)}
            >
              <span className={styles["link-text"]}>Documentation</span>
            </a>
          </div>
          <div className={styles.menu}>
            <Menu
              navigation={headerNavigation}
              socials={socials}
              onClick={() => setOpen(!open)}
            />
          </div>
          <GetInvolvedButton
            buttonStyle={cn("button", styles["get-involved-button"])}
          />
        </div>
      </header>
    </Web3Provider>
  );
};

export default Header;
