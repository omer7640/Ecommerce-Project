import React from "react";
import HeroHome from "../Components/HomeComponents/HeroHome";
import HeroMain from "../Components/HomeComponents/HeroMain";
import FeaturedHome from "../Components/HomeComponents/FeaturedHome";
import Discount from "../Components/HomeComponents/Discount";
export default function Home() {
  return (
    <div className="home-page">
      <HeroHome />
      <HeroMain />
      <FeaturedHome />
      <Discount />
    </div>
  );
}
