import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;

    if (!latitude || !longitude) return;

    const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;
    let options = {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${process.env.ADDR_API_KEY}`,
      },
    };
    const response = await (await fetch(url, options)).json();
    res.json({ ok: true, addr: response.documents[0].region_3depth_name });
  }
}
