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

    const currentTime = () => {
      if (new Date().getMinutes() < 45) {
        return new Date().getHours() + "00";
      } else {
        return (new Date().getHours() + 1 === 24 ? "00" : new Date().getHours() + 1) + "00";
      }
    };

    const value = item
      .filter((v: weatherType) => v.fcstTime === currentTime())
      .map(({ baseDate, baseTime, fcstDate, nx, ny, fcstTime, ...rest }: weatherType) => rest);
    res.json({ ok: true, body: value });
  }
}
