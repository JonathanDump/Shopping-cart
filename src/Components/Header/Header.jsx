import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import header from "./Header.module.scss";

export function Header() {
  return (
    <div className={header.header}>
      <Link className={header.logo} to={"/"}>
        Hoel
      </Link>

      <div className={header.buttons}>
        <Button className={"headerButton"} to="shop">
          Shop
        </Button>
        <Button
          className={"headerButton"}
          optionalClassName={"cart"}
          to="cart"
        ></Button>
      </div>
    </div>
  );
}
