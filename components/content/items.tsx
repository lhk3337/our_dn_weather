import Item from "./item";
import CardinalPoints from "@libs/client/cardinalPoints";
import Precipitation from "assets/icon/precipitation";
import Umbrella from "assets/icon/umbrella";
import Water from "assets/icon/water";
import Wind from "assets/icon/wind";
import hightTemp from "assets/icon/highTemp";
import lowTemp from "assets/icon/lowtemp";

interface Props {
  [key: string]: string;
}
export default function Items({ TMN, TMX, POP, PCP, REH, VEC, WSD }: Props) {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col space-y-8 sm:space-y-0">
      <Item name="최저온도" Image={lowTemp} data={`${TMN}º`} isrowColor />
      <Item name="최고온도" Image={hightTemp} data={`${TMX}º`} ishighColor />
      <Item name="강수 확률" Image={Umbrella} data={`${POP}%`} />
      <Item name="강수량" Image={Precipitation} data={`${PCP === "강수없음" ? "0" : PCP} mm`} />
      <Item name="습도" Image={Water} data={`${REH}%`} />
      <Item name="풍속" Image={Wind} data={`${CardinalPoints(VEC)}풍 ${WSD}m/s`} />
    </div>
  );
}
