import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import SecondHero from "./components/SecondHero";
import NoPageSection from "./components/NoPageSection";
import Loading from "./components/Loading";

function NoPage() {
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
        <SecondHero pageName="404 page" />
        <NoPageSection />
        <Footer />
      </>
    );
  }
}

export default React.memo(NoPage);
