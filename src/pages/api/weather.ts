import type { NextApiRequest, NextApiResponse } from "next";
import { dfs_xy_conv } from "@libs/xy_conv";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { x, y } = dfs_xy_conv("toXY", "37.3596399540356", "127.15884281498"); // 위도와 경도를 격자x와 격자y로 변환해주는 함수

    const url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"; /*URL*/

    let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + process.env.SERVICE_KEY;
    queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
    queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
    queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("base_date") +
      "=" +
      encodeURIComponent(new Date().toISOString().slice(0, 10).replace(/-/g, "")); /*오늘 날짜를 yyyymmdd로 표현 */
    queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600"); /**/
    queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(x); /**/
    queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(y); /**/

    const response = await (await fetch(url + queryParams)).json();
    const {
      response: { body },
    } = response;
    res.json({ ok: true, body });
  }
}
