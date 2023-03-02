import type { NextPage } from "next";
import useSWR from "swr";
import useCurrentLocation from "@libs/useCurrentLocation";
import Layout from "../components/layout";
interface SWRProps {
  ok: boolean;
  body: {
    dataType: string;
    items: {
      item: [{ baseDate: "string"; baseTime: string; category: string; nx: number; ny: number; obsrValue: string }];
    };
  };
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

  return (
    <Layout>
      <main>
        <div>{addrData?.addr}</div>
        {data?.body.items.item.map((v, index) => (
          <div key={index}>
            <span className="text-teal-600">
              {v.category} : {v.obsrValue}
            </span>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Home;
