import Head from "next/head";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Location Weather</title>
      </Head>
      <nav className="h-20 bg-teal-50 px-8 md:px-32 pt-8 flex justify-between items-center">
        <h1 className="text-sky-700 font-bold text-2xl">우리동네 날씨</h1>
        <span className="text-slate-400 text-sm">출처 - 기상청_단기예보 ((구)_동네예보) 조회서비스</span>
      </nav>
      <div className="mx-auto mt-16 px-6 sm:p-0 max-w-xl">{children}</div>
    </>
  );
}
