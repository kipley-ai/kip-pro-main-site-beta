import Head from "next/head";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/app.sass";
import Script from "next/script";
import { Web3Provider } from "../components/GetInvolvedButton/Web3Context"
import { Toaster } from 'react-hot-toast';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'KIP Protocol',
  projectId: 'KIP-PRO',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

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
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
