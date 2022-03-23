import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div>
        <Link href="/">
          <button>
            <h1 className="text-dark text-2xl font-bold px-12 py-8">Telep</h1>
          </button>
          {/* <a className="flex">
            <h1 className="text-dark text-2xl font-bold px-12 py-8">Telep</h1>
          </a> */}
        </Link>
      </div>
    </>
  );
};

export default Header;
