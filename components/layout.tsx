import Head from "next/head";
import Nav from "./nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>우리 동네 날씨</title>
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
}
