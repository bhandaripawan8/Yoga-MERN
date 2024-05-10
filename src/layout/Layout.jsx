import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
    <Header />
    <div className="w-full flex flex-col items-center justify-center ">
      <main>
        <Routers />
      </main>
        <Footer />
    </div>

    </>
  );
};

export default Layout;
