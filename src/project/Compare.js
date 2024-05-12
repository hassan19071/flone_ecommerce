import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import SecondHero from "./components/SecondHero";
import CompareProducts from "./components/CompareSection";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function Compare() {
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
        <SecondHero pageName="compare" />
        <CompareProducts />
        <ToastContainer/>
        <Footer />
      </>
    );
  }
}

export default React.memo(Compare);
