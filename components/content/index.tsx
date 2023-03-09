import CardinalPoints from "@libs/cardinalPoints";
import Precipitation from "assets/icon/precipitation";
import Umbrella from "assets/icon/umbrella";
import Water from "assets/icon/water";
import Wind from "assets/icon/wind";
import React from "react";
import Item from "./items";
import WeatherInfo from "./weatherinfo";

interface Props {
  [key: string]: string;
}
export default function Content({ PTY, REH, PCP, SKY, TMP, VEC, WSD, addr, POP, forecastTime }: Props) {
  return (
    <div className="space-y-12 py-8">
      <WeatherInfo addr={addr} TMP={TMP} SKY={SKY} PTY={PTY} forecastTime={forecastTime} />
      <div className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col space-y-8 sm:space-y-0">
        <Item name="강수 확률" Image={Umbrella} data={`${POP}%`} />
        <Item name="강수량" Image={Precipitation} data={`${PCP === "강수없음" ? "0" : PCP} mm`} />
        <Item name="습도" Image={Water} data={`${REH}%`} />
        <Item name="풍속" Image={Wind} data={`${CardinalPoints(VEC)}풍 ${WSD}m/s`} />
      </div>
    </div>
  );
}
