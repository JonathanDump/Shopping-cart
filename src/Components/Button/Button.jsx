import { Link } from "react-router-dom";
import cl from "./Button.module.scss";

export function Button({ className, children, to, optionalClassName }) {
  const clName = optionalClassName
    ? `${cl[className]} ${cl[optionalClassName]}`
    : cl[className];

  return (
    <div className={clName}>
      <Link className={clName} to={`/${to}`}>
        {children}
      </Link>
    </div>
  );
}
