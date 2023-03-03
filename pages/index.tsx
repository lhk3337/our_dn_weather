import type { NextPage } from "next";
import useSWR from "swr";
import useCurrentLocation from "@libs/useCurrentLocation";
import Layout from "../components/layout";
import { weatherType } from "./api/weather";
import Content from "@components/content";
interface SWRProps {
  ok: boolean;
  body: [weatherType];
}
interface WeatherDetailProps {
  [key: string]: string;
}

const Home: NextPage = () => {
  const { latitude, longitude } = useCurrentLocation();

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SWRProps>(
    latitude && longitude ? `/api/weather?latitude=${latitude}&longitude=${longitude}` : null,
    fetcher
  );
  const { data: addrData } = useSWR(
    latitude && longitude ? `/api/addr?latitude=${latitude}&longitude=${longitude}` : null
  );

  const weatherData = {
    ...data?.body.reduce((acc: WeatherDetailProps, curr) => {
      acc[curr.category] = curr.fcstValue;
      return acc;
    }, {}),
    addr: addrData?.addr,
  };

  return (
    <Layout>
      <main>
        <Content {...weatherData} />
      </main>
    </Layout>
  );
};

export default Home;
