import home from "./Home.module.scss";
import { Button } from "/src/Components/Button/Button";

export function Home() {
  return (
    <div className={home.home}>
      <div className={home.container}>
        <div className={home.text}>
          Seamless furniture <br /> with natural fabrics
        </div>
        <Button className={"home"} to={"shop"}>
          Shop now
        </Button>
      </div>
    </div>
  );
}
