import Head from "next/head";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/app.sass";
import Script from "next/script";
import { Web3Provider } from "../components/GetInvolvedButton/Web3Context"
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6PQ6H3S32V" />
      <Script id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'G-6PQ6H3S32V');
            `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ParallaxProvider>
        <Web3Provider>
          <Component {...pageProps} />
          <Toaster />
        </Web3Provider>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
