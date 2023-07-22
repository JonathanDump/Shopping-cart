import { useLoaderData } from "react-router-dom";
import shop from "./Shop.module.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

export function Shop() {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className={shop.shop}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export async function productLoader() {
  const result = await fetch("/src/json/products.json");
  const data = await result.json();
  return data;
}
