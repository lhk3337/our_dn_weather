import CardinalPoints from "@libs/cardinalPoints";
import Precipitation from "assets/icon/precipitation";
import Umbrella from "assets/icon/umbrella";
import Water from "assets/icon/water";
import Wind from "assets/icon/wind";
import React from "react";
import Item from "./items";
import WeatherImage from "./weatherImage";
interface Props {
  [key: string]: string;
}
export default function Content({ PTY, REH, PCP, SKY, TMP, VEC, WSD, addr, POP, forecastTime }: Props) {
  return (
    <div className="space-y-12">
      <div className="rounded-xl shadow-lg bg-[#EAECEF] mb-10 text-black relative">
        <div className="flex justify-between items-center p-12">
          <div className="space-y-32">
            <h1 className="text-5xl font-bold">{addr}</h1>
            <h1 className="text-8xl font-bold">{TMP}º</h1>
          </div>
          <WeatherImage skyState={SKY} pty={PTY} />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col gap-4">
        <Item name="강수 확률" Image={Umbrella} data={`${POP}%`} />
        <Item name="강수량" Image={Precipitation} data={`${PCP === "강수없음" ? "0" : PCP} mm`} />
        <Item name="습도" Image={Water} data={`${REH}%`} />
        <Item name="풍속" Image={Wind} data={`${CardinalPoints(VEC)}풍 ${WSD}m/s`} />
      </div>
    </div>
  );
}
