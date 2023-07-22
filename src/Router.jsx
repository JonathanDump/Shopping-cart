import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home/Home";
import { Shop, productLoader } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", loader: productLoader, element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
