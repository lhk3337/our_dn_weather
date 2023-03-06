import CardinalPoints from "@libs/cardinalPoints";
import React from "react";
interface Props {
  [key: string]: string;
}
export default function Content({ PTY, REH, RN1, SKY, T1H, VEC, WSD, addr }: Props) {
  return (
    <div className="rounded-xl bg-slate-500 shadow-xl p-12 text-white">
      <h1 className="text-5xl font-bold">{addr}</h1>
      <div>온도 : {T1H}</div>
      <div>날씨 : {SKY === "1" ? "맑음" : SKY === "3" ? "구름 많음" : SKY === "4" ? "흐림" : ""}</div>
      <div>{PTY === "1" ? "비" : PTY === "2" ? "비/눈" : PTY === "3" ? "눈" : PTY === "4" ? "소나기" : ""}</div>
      <div>습도 : {REH}%</div>
      <div>강수량 : {RN1 === "강수없음" ? "0" : RN1}</div>
      <div>
        풍속 : {CardinalPoints(VEC)}풍 {WSD}m/s
      </div>
    </div>
  );
}
