import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>우리 동네 날씨</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <SWRConfig
        value={{
          fetcher: (url: string) => fetch(url).then((r) => r.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
export default MyApp;
