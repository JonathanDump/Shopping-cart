import { useState } from "react";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import app from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { Outlet, useParams } from "react-router-dom";
import { useProductLoader } from "./hooks/useProductLoader";

function App() {
  const { products, loading, dispatch } = useProductLoader();
  return (
    <div className={app.app}>
      <Header />
      <div className={app.main}>
        <Outlet context={{ products, loading, dispatch }} />
      </div>
    </div>
  );
}

export default App;
