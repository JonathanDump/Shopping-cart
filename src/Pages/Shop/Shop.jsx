import shop from "./Shop.module.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useOutletContext } from "react-router-dom";
import Transition from "../../animations/transition";

export function Shop() {
  const { products, loading } = useOutletContext();
  if (loading) {
    return (
      <>
        <div className={shop.loading}>Loading...</div>
        <Transition />
      </>
    );
  }

  return (
    <>
      <div className={shop.shop}>
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
      <Transition />
    </>
  );
}

export async function productLoader() {
  const result = await fetch("/src/json/products.json");
  const data = await result.json();
  return data;
}
