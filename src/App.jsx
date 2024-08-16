import "./App.css";
import { ProductProvider } from "./Context/ProductContext";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  json,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import { routes } from "./constant/routes";
import { BaseUrl } from "./Components/Urls/ApiUrl";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
