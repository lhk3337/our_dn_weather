import WeatherImage from "../weatherImage";
import { isToday } from "@libs/client/isToday";
interface Props {
  [key: string]: string;
}
export default function WeatherInfo({ addr, TMP, SKY, PTY, forecastTime }: Props) {
  return (
    <div className="rounded-xl shadow-lg bg-[#EAECEF] mb-10 text-black relative">
      <div className="flex justify-between items-center p-12">
        <div className="space-y-32">
          <h1 className="text-4xl sm:text-5xl font-bold">{addr}</h1>
          <h1 className="text-6xl sm:text-8xl font-bold">{TMP}º</h1>
        </div>
        <WeatherImage skyState={SKY} pty={PTY} />
      </div>
      <div className="text-slate-400 font-medium text-base rounded-b-xl py-4 px-6 flex justify-between items-center bg-white">
        <div className="flex flex-col">
          <span>예보 기준</span>
          <span>{forecastTime.replace(/(.{2})/, "$1:")}</span>
        </div>
        <span>{isToday()}</span>
      </div>
    </div>
  );
}
