import React from "react";
import "./FeaturedHome.css";

export default function FeaturedCard({ img, title }) {
  return (
    <div>
      <div class="card" style={{ width: "18rem;" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
