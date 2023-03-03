import Head from "next/head";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Location Weather</title>
      </Head>
      <nav className="text-red-600">Location Weather</nav>
      {children}
    </>
  );
}
