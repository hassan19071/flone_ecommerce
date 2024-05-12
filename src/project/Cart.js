import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import SecondHero from "./components/SecondHero";
import CartSection from "./components/CartSection";
import Loading from "./components/Loading";
function Cart() {
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
        <SecondHero pageName="cart" />
        <CartSection />
        <Footer />
      </>
    );
  }
}

export default React.memo(Cart);
