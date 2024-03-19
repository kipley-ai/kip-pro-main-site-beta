import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  layoutNoOverflow?: boolean;
  children: React.ReactNode;
};

const Layout = ({ layoutNoOverflow, children }: LayoutProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    clearQueueScrollLocks();
    enablePageScroll();
  }, [pathname]);

  return (
    <>
      <Head>
        <title>KIP Protocol - Decentralising AI through Knowledge Assets</title>
        <link rel="icon" href="/logo-KIP-twitter-5.png" />
      </Head>
      <div
        className={cn(styles.layout, {
          [styles.layoutNoOverflow]: layoutNoOverflow,
        })}
      >
        {(pathname !== "/campaigns" && pathname !== "/leaderboard") && (<Banner />)}
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
