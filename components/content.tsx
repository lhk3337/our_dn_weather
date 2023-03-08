import CardinalPoints from "@libs/cardinalPoints";
import Precipitation from "assets/icon/precipitation";
import Umbrella from "assets/icon/umbrella";
import Water from "assets/icon/water";
import Wind from "assets/icon/wind";
import React from "react";
import WeatherImage from "./weatherImage";
interface Props {
  [key: string]: string;
}
export default function Content({ PTY, REH, PCP, SKY, TMP, VEC, WSD, addr, POP }: Props) {
  return (
    <div className="space-y-12">
      <div className="rounded-xl bg-[#EAECEF] shadow-lg p-12 mb-10 text-black">
        <div className="flex justify-between items-center">
          <div className="space-y-32 ">
            <h1 className="text-5xl font-bold">{addr}</h1>
            <h1 className="text-8xl font-bold">{TMP}º</h1>
          </div>
          <WeatherImage skyState={SKY} pty={PTY} />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col gap-4">
        <div className="rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2">
          <div className="text-[#7E8795] text-lg flex items-center space-x-2">
            <Umbrella />
            <span>강수 확률</span>
          </div>
          <span className="text-2xl font-extrabold ml-4">{POP}%</span>
        </div>

        <div className="rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2">
          <div className="text-[#7E8795]  text-lg  flex items-center space-x-2">
            <Precipitation />
            <span>강수량</span>
          </div>
          <span className="text-2xl font-extrabold ml-4">{PCP === "강수없음" ? "0" : PCP} mm</span>
        </div>

        <div className="rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2">
          <div className="text-[#7E8795]  text-lg  flex items-center space-x-2">
            <Water />
            <span>습도</span>
          </div>
          <span className="text-2xl font-extrabold ml-4">{REH}%</span>
        </div>
        <div className="rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2">
          <div className="text-[#7E8795]  text-lg  flex items-center space-x-2">
            <Wind />
            <span>풍속</span>
          </div>
          <span className="text-2xl font-extrabold ml-4">
            {CardinalPoints(VEC)}풍 {WSD}m/s
          </span>
        </div>
      </div>
    </div>
  );
}
