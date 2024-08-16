import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import AddFav from "./AddFav";
import "./Fav.css";

export default function Fav() {
  // const value = useContext(CounterContext);
  const value = useContext(ProductContext);

  console.log(value.cartItems);
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg starter">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-16 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Qty
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        {value.cartItems.length === 0 && (
          <h3 className="cart-empty">Sorry! Your Shopping Cart is empty</h3>
        )}

        {value.cartItems.map((cartItem) => (
          <AddFav cartItem={cartItem} key={cartItem.id} />
        ))}
      </table>
    </div>
  );
}
