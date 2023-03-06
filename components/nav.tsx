export default function Nav() {
  return (
    <nav className="h-24 bg-gradient-to-r from-[#5ECD91] to-[#2E98BF] px-8 md:px-32 py-4 flex justify-between items-center select-none	">
      <h1 className="text-white font-bold text-3xl">우리동네 날씨</h1>
      <span className="text-white text-xs md:text-sm">출처 - 기상청_단기예보 ((구)_동네예보) 조회서비스</span>
    </nav>
  );
}
