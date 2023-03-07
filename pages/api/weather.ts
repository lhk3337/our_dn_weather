import type { NextApiRequest, NextApiResponse } from "next";
import { dfs_xy_conv } from "@libs/xy_conv";
import apiUrl from "@libs/apiUrl";
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
    const response = await apiUrl(x, y); // api url 주소를 함수로 설정

    const {
      response: {
        body: {
          items: { item },
        },
      },
    } = response;

    // const currentTime = () => {
    //   if (new Date().getMinutes() < 10) {
    //     return new Date().getHours() + "00";
    //   } else {
    //     return new Date().getHours() + 1 + "00";
    //   }
    // };

    const getToday = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = ("0" + (1 + date.getMonth())).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);

      return `${year}${month}${day}`;
    };

    const value = item
      .filter((v: weatherType) =>
        v.baseTime === new Date().getHours() + "00"
          ? v.baseTime === "2300"
            ? v.fcstTime === "0000" && v.fcstDate === getToday()
            : v.fcstTime === new Date().getHours() + 1 + "00" && v.fcstDate === getToday()
          : v.baseTime === "2300"
          ? v.fcstTime === "0000" && v.fcstDate === getToday()
          : v.fcstTime === new Date().getHours() + "00" && v.fcstDate === getToday()
      )
      .map(({ nx, ny, ...rest }: weatherType) => rest);
    res.json({ ok: true, body: value });
  }
}
