import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

export interface ListTileProps {
  scrt: string;
  ip: string;
  port: string;
  ping: string;
  country: string;
}

const ListTile: FC<ListTileProps> = ({
  country,
  ip,
  ping,
  port,
  scrt,
}: ListTileProps) => {
  return (
    <a
      className="w-[80%] md:w-[95%] m-auto my-auto"
      href={`tg://proxy?server=${ip}&port=${port}&secret=${scrt}`}
    >
      <div className="w-full flex justify-between items-center align-middle bg-secondary rounded-xl px-6 py-3 shadow-lg shadow-dark/10">
        <div className="w-14 h-14">
          <img
            className="rounded-full w-full h-full object-cover shadow-2xlxl shadow-primary"
            src={`https://countryflagsapi.com/png/${country}`}
            alt={`${country} flag`}
          />
        </div>

        <div className="grow font-bold truncate max-w-[65%]">
          <h3 className="text-dark text-lg">
            {ip}:{port}
          </h3>
          <h4 className="text-dark/60 font-bold text-xs">ping: {ping}</h4>
        </div>
        <div className="text-dark bg-primary/80 rounded-full p-1">
          <IoIosArrowForward />
        </div>
      </div>
    </a>
  );
};

export default ListTile;
