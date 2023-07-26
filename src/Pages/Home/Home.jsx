import home from "./Home.module.scss";
import { Button } from "/src/Components/Button/Button";
import Transition from "../../animations/Transition";

export function Home() {
  return (
    <>
      <div className={home.home}>
        <div className={home.container}>
          <div className={home.text}>
            Seamless <i>furniture</i> <br /> with natural fabrics
          </div>
          <Button className={"home"} to={"shop"}>
            SHOP NOW
          </Button>
        </div>
      </div>
      <Transition />
    </>
  );
}
