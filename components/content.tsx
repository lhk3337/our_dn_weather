import React from "react";
interface Props {
  [key: string]: string;
}
export default function Content({ LGT, PTY, REH, RN1, SKY, T1H, UUU, VEC, VVV, WSD, addr }: Props) {
  return (
    <>
      <h1 className="text-5xl">{addr}</h1>
      <div>온도 : {T1H}</div>
      <div>날씨 : {SKY === "1" ? "맑음" : SKY === "3" ? "구름 많음" : SKY === "4" ? "흐림" : ""}</div>
      <div>습도 : {REH}%</div>
      <div>강수량 : {RN1 === "강수없음" ? "0" : RN1}</div>
      <div>풍속 : {WSD}m/s</div>
      <div>동서바람성분 : {UUU} m/s</div>
      <div>남북바람성분 : {VVV}m/s</div>
      <div>낙뢰 : {LGT}</div>
      <div>{PTY === "1" ? "비" : PTY === "2" ? "비/눈" : PTY === "3" ? "눈" : PTY === "4" ? "소나기" : ""}</div>
      <div>풍향 : {VEC}deg</div>
    </>
  );
}
