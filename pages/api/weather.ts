import type { NextApiRequest, NextApiResponse } from "next";
import { dfs_xy_conv } from "@libs/server/xy_conv";
import apiUrl from "@libs/server/apiUrl";

export interface weatherType {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;

    if (!latitude || !longitude) return;

    const { x, y } = dfs_xy_conv("toXY", latitude, longitude); // 위도와 경도를 격자x와 격자y로 변환해주는 함수
    const response = await apiUrl(x, y, false); // api url 주소를 함수로 설정
    const lowHightemper = await apiUrl(x, y, true);

    const {
      response: {
        body: {
          items: { item },
        },
      },
    } = response;

    const {
      response: {
        body: {
          items: { item: tempItem },
        },
      },
    } = lowHightemper;

    // const currentTime = () => {
    //   if (new Date().getMinutes() < 10) {
    //     return new Date().getHours() + "00";
    //   } else {
    //     return new Date().getHours() + 1 + "00";
    //   }
    // };

    const getToday = () => {
      const date = new Date();
      const year = date.toLocaleString("en-GB", { year: "numeric", timeZone: "Asia/Seoul" } as any);
      const month = date.toLocaleString("en-GB", { month: "numeric", timeZone: "Asia/Seoul" } as any).padStart(2, "0");
      const day = date.toLocaleDateString("en-GB", { day: "2-digit", timeZone: "Asia/Seoul" }).padStart(2, "0");

      return `${year}${month}${day}`;
    };

    const getTime = (n: number) => {
      const hours = Number(new Date().toLocaleString("en-GB", { hour: "numeric", timeZone: "Asia/Seoul" } as any));
      return (hours + n).toString().padStart(2, "0"); // 09:00형식
    };

    const value = item
      .filter((v: weatherType) =>
        v.baseTime === getTime(0) + "00"
          ? v.baseTime === "2300"
            ? v.fcstTime === "0000" && v.fcstDate === getToday()
            : v.fcstTime === getTime(1) + "00" && v.fcstDate === getToday()
          : v.baseTime === "2300"
          ? v.fcstTime === "0000" && v.fcstDate === getToday()
          : v.fcstTime === getTime(0) + "00" && v.fcstDate === getToday()
      )
      .map(({ nx, ny, baseDate, baseTime, fcstDate, ...rest }: weatherType) => rest);
    const tempValue = tempItem
      .filter(
        (v: weatherType) =>
          v.baseTime === "0200" && (v.category === "TMN" || v.category === "TMX") && v.fcstDate === getToday()
      )
      .map(({ nx, ny, baseDate, baseTime, fcstDate, fcstTime, ...rest }: weatherType) => rest);

    res.json({ ok: true, body: [...value, ...tempValue] });
  }
}
