import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IndividualCard from "./IndividualCard";
import { ProductContext } from "../../Context/ProductContext";
import "./individual.css";

export default function Individual() {
  const { id } = useParams();
  // const value = useContext(CounterContext);
  const value = useContext(ProductContext);

  // console.log("heyyyyyyy", id);
  const Api = "http://localhost:5173/products";

  useEffect(() => {
    axios.get(`${Api}?id=${id}`).then((response) => {
      value.setSingle(response.data);
    });
  }, []);
  console.log(value.single);

  return (
    <div>
      {value.single.map((pro) => (
        <IndividualCard pro={pro} key={pro.id} />
      ))}
    </div>
  );
}
