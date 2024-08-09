import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../Pages/Shop";
import Navbar from "../Components/Shared/Navbar";
import Fav from "../Components/AddToCart/Fav";
export const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />,
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <Shop />,
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />,
        <Fav />
      </>
    ),
  },
];
