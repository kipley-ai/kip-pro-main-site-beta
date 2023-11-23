import Head from "next/head";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/app.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
