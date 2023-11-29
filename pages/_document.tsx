import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            content="KIP Protocol is a Web3 framework for the creation, management & monetisation of Knowledge Assets in the AI age."
            name="KIP Protocol"
          />
          <meta
            content="KIP Protocol"
            property="og:title"
          />
          <meta
            content="KIP Protocol is a Web3 framework for the creation, management & monetisation of Knowledge Assets in the AI age."
            property="og:description"
          />
          <meta content="%PUBLIC_URL%/logo-KIP-twitter-5.png" property="og:image" />
          <meta
            property="og:url"
            content="https://kip.pro/"
          />
          <meta
            property="og:site_name"
            content="KIP Protocol"
          />
          <meta
            content="KIP Protocol"
            property="twitter:title"
          />
          <meta
            content="KIP Protocol is a Web3 framework for the creation, management & monetisation of Knowledge Assets in the AI age."
            property="twitter:description"
          />
          <meta
            content="%PUBLIC_URL%/logo-KIP-twitter-5.png"
            property="twitter:image"
          />
          <meta property="og:type" content="Article" />
          <meta content="summary" name="twitter:card" />
          <meta name="twitter:site" content="@KIPprotocol" />
          <meta name="twitter:creator" content="@KIPprotocol" />
          <meta name="theme-color" content="#01F7FF" />
          <meta name="msapplication-TileColor" content="#01F7FF" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="RaJJ6dtIx2uhJqPaedR8u4PuIaINCrY4My3ai7rbe9A" />
        </Head>
        <body className="app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
