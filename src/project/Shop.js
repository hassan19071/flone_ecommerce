import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import SecondHero from "./components/SecondHero";
import ShopSection from "./components/ShopSection";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function Shop() {
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <HeaderSection />
        <SecondHero pageName="shop" />
        <ShopSection />
        <ToastContainer/>
        <Footer />
      </>
    );
  }
}

export default React.memo(Shop);
