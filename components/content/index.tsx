import CardinalPoints from "@libs/client/cardinalPoints";
import Precipitation from "assets/icon/precipitation";
import Umbrella from "assets/icon/umbrella";
import Water from "assets/icon/water";
import Wind from "assets/icon/wind";
import hightTemp from "assets/icon/highTemp";
import lowTemp from "assets/icon/lowtemp";

import Item from "./item";
import WeatherInfo from "./weatherinfo";
import Items from "./items";

interface Props {
  [key: string]: string | any;
}
export default function Content({ PTY, REH, PCP, SKY, TMP, VEC, WSD, addr, POP, TMN, TMX, forecastTime }: Props) {
  const item = {
    inforItems: {
      PTY,
      SKY,
      TMP,
      addr,
      forecastTime,
    },
    etcItems: {
      TMN,
      TMX,
      POP,
      PCP,
      REH,
      VEC,
      WSD,
    },
  };

  return (
    <div className="space-y-12 py-8">
      <WeatherInfo {...item.inforItems} />
      <Items {...item.etcItems} />
    </div>
  );
}
