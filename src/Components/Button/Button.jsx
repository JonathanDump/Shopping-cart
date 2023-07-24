import { Link } from "react-router-dom";
import cl from "./Button.module.scss";

export function Button({
  className,
  children,
  to,
  optionalClassName,
  products,
}) {
  const count = products?.reduce((sum, item) => (sum += item.inCart), 0);
  const clName = optionalClassName
    ? `${cl[className]} ${cl[optionalClassName]}`
    : cl[className];

  return (
    <div>
      <Link className={clName} to={`/${to}`} data-count={count}>
        {children}
      </Link>
    </div>
  );
}
