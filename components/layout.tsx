import React, { FC } from "react";

import Footer from "./footer";
import Header from "./header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
