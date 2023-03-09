import Head from "next/head";
import Nav from "./nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-xl px-8 sm:px-0">{children}</div>
    </>
  );
}
