import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import AboutSection from "./components/AboutSection";
import SecondHero from "./components/SecondHero";
import Loading from "./components/Loading";

function About(){
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
          <SecondHero pageName="about" />
          <AboutSection />
          <Footer />
        </>
      );
    }
}

export default React.memo(About);