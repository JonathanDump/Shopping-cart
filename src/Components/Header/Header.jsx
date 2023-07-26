import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import header from "./Header.module.scss";
import { ReactComponent as Bag } from "/public/icons/bag.svg";

export function Header({ products }) {
  return (
    <div className={header.header}>
      <Link className={header.logo} to={"/"}>
        Hoel
      </Link>
      <div className={header.buttons}>
        <Button
          className={"headerButton"}
          to="shop"
          optionalClassName={"hover-underline-animation"}
        >
          Shop
        </Button>
        <Button
          className={"headerButton"}
          optionalClassName={"cart"}
          to="cart"
          products={products}
        >
          <Bag />
        </Button>
      </div>
    </div>
  );
}
