import Head from "next/head";
import Nav from "./nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Location Weather</title>
      </Head>
      <Nav />
      <div className="px-6 bg-[#f9f9f9]">{children}</div>
    </>
  );
}
