import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ShopCard from "../../src/Components/ShopComponents/ShopCard";
// import AdminMode from "../Components/ShopComponents/AdminMode";
import AdminMode from "../Components/ShopComponents/AdminMode";

export default function Shop() {
  // const value = useContext(CounterContext);
  // const { data } = useContext(CounterContext);
  const { data } = useContext(ProductContext);

  // console.log(value);
  return (
    <div>
      <section className="shop-section">
        <div className="shop-content">
          <h1 className="shop-heading">Shop online</h1>

          <AdminMode />

          <p className="shop-para">
            Browse our selection of high-quality{" "}
            <span className="furniture"> Furnitures</span> with free worldwide
            shipping.
          </p>
        </div>
        <div className="shop-card">
          {data.map((projectItem) => (
            <ShopCard projectItem={projectItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
