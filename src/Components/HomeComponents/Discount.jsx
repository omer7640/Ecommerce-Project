import React from "react";
import "./FeaturedHome.css";

export default function Discount() {
  return (
    <div className="discount-section">
      <div className="discount-start">
        <div className="sale">
          <span className="onsale-text">On sale</span>
          <span className="onsale-price">$80</span>
        </div>
        <div className="discount-info">
          <h2 className="dis-head">Discount 50%</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            mollitia nostrum, aliquid doloremque ipsa laboriosam pariatur
            reprehenderit vitae iste ullam, soluta ex perferendis velit deleniti
            laudantium quibusdam incidunt, aspernatur modi?
          </p>
          <button className="dis-btn">buy now</button>
        </div>
      </div>
    </div>
  );
}
