import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        {
          path: "cart",
          element: <Cart />,
        },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
