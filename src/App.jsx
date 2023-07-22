import { useState } from "react";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import app from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { useParams } from "react-router-dom";

function App() {
  const { page } = useParams();

  return (
    <div className={app.app}>
      <Header />
      <div className={app.main}>
        {page === "shop" ? <Shop /> : page === "cart" ? <Cart /> : <Home />}
      </div>
    </div>
  );
}

export default App;
