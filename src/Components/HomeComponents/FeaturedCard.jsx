import React from "react";
import "./FeaturedHome.css";
import { Link } from "react-router-dom";

export default function FeaturedCard({ img, title }) {
  return (
    <div>
      <Link to="/shop">
        <div class="card" style={{ width: "18rem;" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>

            <Link to="/shop" class="btn go-some">
              Shop Now
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
