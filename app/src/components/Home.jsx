import React from "react";
import NavBar from "./layout/NavBar.jsx";
import Landing from "./Landing";
import PopularItems from "./PopularItems";
import SpecialDeals from "./SpecialDeals";
import PromoteItem from "./PromoteItem";
import Footer from "./layout/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <PopularItems />
      <SpecialDeals />
      <PromoteItem />
      <Footer />
    </>
  );
}
