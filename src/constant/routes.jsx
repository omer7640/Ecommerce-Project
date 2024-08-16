import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../Pages/Shop";
import Navbar from "../Components/Shared/Navbar";
import Fav from "../Components/AddToCart/Fav";
import Individual from "../Components/SingleProduct/Individual";
import Footer from "../Components/Shared/Footer";
import Brand from "../Components/Shared/Brand";
import { ScrollToTop } from "../../ScrollToTop";
export const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />,
        <Brand />
        <Footer />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Shop />,
        <Brand />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <ScrollToTop />
        <Navbar />,
        <Fav />
        <Brand />
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Navbar />,
        <Individual />
      </>
    ),
  },
];
