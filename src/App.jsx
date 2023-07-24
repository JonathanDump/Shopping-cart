import app from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useProductLoader } from "./hooks/useProductLoader";

function App() {
  const { products, loading, dispatch } = useProductLoader();

  return (
    <div className={app.app}>
      <Header products={products} />
      <div className={app.main}>
        <Outlet context={{ products, loading, dispatch }} />
      </div>
    </div>
  );
}

export default App;
