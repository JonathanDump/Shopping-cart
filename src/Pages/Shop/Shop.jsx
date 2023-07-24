import shop from "./Shop.module.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useOutletContext } from "react-router-dom";

export function Shop() {
  const { products, loading, setProducts } = useOutletContext();
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className={shop.shop}>
      shop
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            item={item}
            products={products}
            setProducts={setProducts}
          />
        );
      })}
    </div>
  );
}

export async function productLoader() {
  const result = await fetch("/src/json/products.json");
  const data = await result.json();
  return data;
}
