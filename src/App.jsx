import "./App.css";
import { CounterContext } from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./constant/routes";
function App() {
  const router = createBrowserRouter(routes);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5173/products").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  const addProduct = (addedProduct) => {
    axios
      .post("http://localhost:5173/products", addedProduct)
      .then((response) => {
        setData((prevProduct) => [...prevProduct, response.data]);
      })
      .catch((error) => console.log("error", error));
  };
  const deletPro = (proId) => {
    axios.delete(`http://localhost:5173/products/${proId}`);
    const proArr = data.filter((dataItem) => {
      return dataItem.id !== proId;
    });
    setData(proArr);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <CounterContext.Provider
        value={{
          data,
          setData,
          addProduct,
          deletPro,
          cartItems,
          handleAddToCart,
        }}
      >
        {/* <AllRoutes /> */}
        <RouterProvider router={router} />
      </CounterContext.Provider>
    </>
  );
}

export default App;
