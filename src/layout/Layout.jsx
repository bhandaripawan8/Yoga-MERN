import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
    <Header />
      <main>
        <Routers />
      </main>
        <Footer />
    </div>

    </>
  );
};

export default Layout;
