import React from "react";
import Landing from "./Landing";
import PopularItems from "./PopularItems";
import SpecialDeals from "./SpecialDeals";
import PromoteItem from "./PromoteItem";
import Layout from "./layout/Layout.jsx";
export default function Home() {
  return (
    <Layout>
      <Landing />
      <PopularItems />
      <SpecialDeals />
      <PromoteItem />
    </Layout>
  );
}
