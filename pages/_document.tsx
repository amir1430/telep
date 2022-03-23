import React, { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html className="bg-primary">
      <Head>
        <meta name="description" content="telegram Mtproto proxies" />
      </Head>
      <body className=" font-YanoneKaffeesatz">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
