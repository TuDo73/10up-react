import clsx from "clsx";
import styles from "./Top.module.scss";
import Header from "../Header";
import Hero from "../Hero";

const Top = () => {
  return (
    <>
      <div className={clsx(styles.top)}>
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Top;
