import clsx from "clsx";
import styles from "./Footer.module.scss";
import FooterImg from "../../assets/images/10up_Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className={clsx(styles.footer)}>
        <div className={clsx(styles.footerWrap)}>
          <img src={FooterImg} alt="logo" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
