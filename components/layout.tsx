import Head from "next/head";
import Nav from "./nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
