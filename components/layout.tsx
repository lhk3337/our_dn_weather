import Head from "next/head";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Next.js 13</title>
      </Head>
      <nav className="text-red-600">Next.js 13</nav>
      {children}
    </>
  );
}
