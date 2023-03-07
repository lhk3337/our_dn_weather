import CardinalPoints from "@libs/cardinalPoints";
import React from "react";
interface Props {
  [key: string]: string;
}
export default function Content({ PTY, REH, PCP, SKY, TMP, VEC, WSD, addr, POP }: Props) {
  return (
    <div className="rounded-xl bg-slate-500 shadow-xl p-12 text-white">
      <h1 className="text-5xl font-bold">{addr}</h1>
      <div>온도 : {TMP}</div>
      <div>강수 확률 : {POP}%</div>
      <div>날씨 : {SKY === "1" ? "맑음" : SKY === "3" ? "구름 많음" : SKY === "4" ? "흐림" : ""}</div>
      <div>
        강수 형태 : {PTY === "1" ? "비" : PTY === "2" ? "비/눈" : PTY === "3" ? "눈" : PTY === "4" ? "소나기" : "없음"}
      </div>
      <div>강수량 : {PCP === "강수없음" ? "0" : PCP} mm</div>
      <div>습도 : {REH}%</div>
      <div>
        풍속 : {CardinalPoints(VEC)}풍 {WSD}m/s
      </div>
    </div>
  );
}
