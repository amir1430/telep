import type { NextPage } from "next";
import ListTile, { ListTileProps } from "../components/list-tile";
import { GetServerSideProps } from "next";
import axios from "axios";
import Head from "next/head";

interface HomeProps {
  mtprotos: ListTileProps[];
}

const Home: NextPage<HomeProps> = ({ mtprotos }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Telep | Home</title>
      </Head>

      {/* <div className="max-w-[1560px] gap-6 m-auto mb-16 flex flex-col lg:flex-row md:px-12">
        <div className="w-[100%] lg:w-[60%] my-auto flex flex-col lg:flex-row items-center justify-start text-center lg:text-left gap-12">
          <div className="py-12">
            <h3 className="font-bold text-5xl text-dark mb-8">
              Telegram Proxy Explorer
            </h3>
            <h4 className="font-bold text-dark/60">Choose your proxy</h4>
          </div>
        </div>
        <div className="w-[100%] lg:w-[40%]"></div>
      </div> */}
      <div className="max-w-[1560px] m-auto md:px-12 text-center lg:text-left">
        <div className="py-12">
          <h3 className="font-bold text-4xl lg:text-6xl text-dark mb-8 lg:mb-4">
            Telegram Proxy Explorer
          </h3>
          <h4 className="font-bold text-dark/60">
            Choose your proxy and enjoy
          </h4>
        </div>
      </div>

      {/* <div>
        <button className="bg-secondary px-6 py-3 m-2 rounded-lg ">All</button>
        <button className="bg-secondary px-6 py-3 m-2 rounded-lg ">
          Mtproto
        </button>
        <button className="bg-secondary px-6 py-3 m-2 rounded-lg ">
          socks5
        </button>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-12 max-w-[1560px] gap-6 m-auto mb-16">
        {mtprotos.map((mtproto) => {
          return <ListTile {...mtproto} key={mtproto.ip} />;
        })}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const proxies = await (
    await axios.get("https://mtpro.xyz/api/?type=mtproto")
  ).data;

  const mtprotos: ListTileProps[] = proxies.map((e: any) => ({
    country: e.country,
    ip: e.host,
    ping: e.ping,
    scrt: e.secret,
    port: e.port,
  }));

  return {
    props: {
      mtprotos,
    },
  };
};
