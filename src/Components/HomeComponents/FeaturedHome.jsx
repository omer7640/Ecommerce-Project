import React from "react";
import "./FeaturedHome.css";
import stool from "../../assets/stool.webp";
import chairBlue from "../../assets/chairBlue.webp";
import smallStool from "../../assets/smallStool.webp";
import rachet from "../../assets/rachet.webp";
import FeaturedCard from "./FeaturedCard";
export default function FeaturedHome() {
  return (
    <div className="featured-section">
      <h4 className="feature-heading">
        <span>Featured Products</span>
      </h4>
      <div className="feature-card">
        <FeaturedCard img={stool} title={"dummy product"} />
        <FeaturedCard img={rachet} title={"dummy product"} />
        <FeaturedCard img={chairBlue} title={"dummy product"} />
        <FeaturedCard img={smallStool} title={"dummy product"} />
      </div>
    </div>
  );
}
