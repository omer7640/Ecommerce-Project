import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../Components/Urls/ApiUrl";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [single, setSingle] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get(`${BaseUrl}`).then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (addedProduct) => {
    axios
      .post(`${BaseUrl}`, addedProduct)
      .then((response) => {
        setData((prevProduct) => [...prevProduct, response.data]);
      })
      .catch((error) => console.log("error", error));
  };

  const deletPro = (proId) => {
    axios.delete(`${BaseUrl}/${proId}`);
    const proArr = data.filter((dataItem) => dataItem.id !== proId);
    setData(proArr);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const editProduct = (updatedProduct) => {
    axios
      .put(`${BaseUrl}/${updatedProduct.id}`, updatedProduct)
      .then((response) => {
        let updatedFur = data?.map((item) => {
          if (item?.id === updatedProduct?.id) {
            return response?.data;
          } else {
            return item;
          }
        });
        setData(updatedFur);
      })
      .catch((error) => console.log("error", error));
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
  };

  const deleteCart = (product) => {
    const productExist = cartItems.find((items) => items.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((items) => items.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((items) =>
          items.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : items
        )
      );
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        addProduct,
        deletPro,
        cartItems,
        handleAddToCart,
        single,
        setSingle,
        handleEditProduct,
        currentProduct,
        setCurrentProduct,
        editProduct,
        deleteCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
