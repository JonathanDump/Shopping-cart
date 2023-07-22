import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },

    {
      path: "/:page",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};
