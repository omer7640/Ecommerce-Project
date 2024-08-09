import React, { useContext } from "react";
import { CounterContext } from "../Context/Context";
import ShopCard from "../../src/Components/ShopComponents/ShopCard";
// import AdminMode from "../Components/ShopComponents/AdminMode";
import AdminMode from "../Components/ShopComponents/AdminMode";

export default function Shop() {
  const value = useContext(CounterContext);
  // console.log(value);
  return (
    <div>
      <section className="shop-section">
        <div className="shop-content">
          <h1 className="shop-heading">Shop online</h1>

          <AdminMode />

          <p className="shop-para">
            Browse our selection of high-quality electronics with free worldwide
            shipping.
          </p>
        </div>
        <div className="shop-card">
          {value.data.map((projectItem) => (
            <ShopCard projectItem={projectItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
