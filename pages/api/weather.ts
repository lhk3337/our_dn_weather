import type { NextApiRequest, NextApiResponse } from "next";
import { dfs_xy_conv } from "@libs/xy_conv";
import apiUrl from "@libs/apiUrl";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;

    if (!latitude || !longitude) return;

    const { x, y } = dfs_xy_conv("toXY", latitude, longitude); // 위도와 경도를 격자x와 격자y로 변환해주는 함수
    const response = await apiUrl(x, y); // api url 주소를 함수로 설정
    const {
      response: { body },
    } = response;
    res.json({ ok: true, body });
  }
}
