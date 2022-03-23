import Head from "next/head";
import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>Telep | Not found</title>
        <meta name="description" content="telep | not found page" />
      </Head>
      <div className="w-[80%] h-[80vh] m-auto bg-secondary rounded-2xl shadow-lg shadow-dark/15 mb-16 flex items-center justify-center">
        <h1 className="text-xl font-bold text-dark text-center">
          Not Found | 404
        </h1>
      </div>
    </>
  );
};

export default NotFound;
