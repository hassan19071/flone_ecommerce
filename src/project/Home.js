import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import MainHero from "./components/MainHero";
import Features from "./components/FeaturesSection";
import DealProducts from "./components/DealProducts";
import Footer from "./components/FooterSection";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function Home() {
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
        <MainHero />
        <Features />
        <DealProducts />
        <ToastContainer />
        <Footer />
      </>
    );
  }
}

export default React.memo(Home);
