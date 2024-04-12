import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

import { headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import GetInvolvedButton from "@/components/GetInvolvedButton";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();

  useScrollPosition(({ currPos }) => {
    setHeaderStyle(currPos.y <= -2);
  });

  const { pathname } = useRouter();

  return (
      <header
        className={cn(
          {
            [styles.visible]: headerStyle,
            [styles.open]: open,
          },
          pathname === "/campaigns" && !isConnected
            ? styles.campaignsHeader
            : styles.header,
        )}
      >
        <div
          className={cn("container-wide", styles.container)}
          data-scroll-lock-scrollable
          data-scroll-lock-fill-gap
        >
          <Logo className={styles.logo} />
          <div className={styles.links}>
            {/* <Link href="/campaigns">
              <a className={cn("a", styles.codeLink)}>
                <span className={styles["link-text"]}>GENESIS CAMPAIGN</span>
              </a>
            </Link> */}
            <Link href="https://kip.pro/about-us">
              <a className={cn("a", styles.link)}>
                <span className={styles["link-text"]}>About Us</span>
              </a>
            </Link>
            {/* <Link href="/chat-with-kols">
              <a className={cn("a", styles.link)}>
                <span className={styles["link-text"]}>Chat</span>
              </a>
            </Link> */}
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
              href="https://kip.pro/blogs"
              className={cn("a", styles.link)}
            >
              <span className={styles["link-text"]}>Blog</span>
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
            chainStyle={styles.chainButton}
            wrapStyle={styles.getInvolvedButtonWrap}
            wrongNetworkStyle={styles.wrongNetwork}
          />
        </div>
        {pathname === "/campaigns" && !isConnected && (
          <div className={styles.connectWarning}>
            <Image
              src="/images/circle-warning.svg" 
              className={styles.connectWarningIcon}
              width={15} 
              height={15} 
              alt="Warning Icon"
            />
            <p>
              For Existing Galxe users:<br />
              Please use the same wallet to connect
            </p>
          </div>
        )}
      </header>
  );
};

export default Header;
