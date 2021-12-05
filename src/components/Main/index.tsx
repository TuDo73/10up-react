import clsx from "clsx";
import Generate from "../Generate";
import Tech from "../Tech";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <section className={clsx(styles.main)}>
        <Generate />
        <Tech />
      </section>
    </>
  );
};

export default Main;
