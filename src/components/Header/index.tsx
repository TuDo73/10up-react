import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/site_logo.svg";
import { useCallback, useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showHideMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  return (
    <>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles["container-header"])}>
          <div className={clsx(styles.headerWrap)}>
            <a href="#" className={clsx(styles.logo)}>
              <img src={Logo} alt="logo" />
            </a>
            <div
              className={clsx(styles.menuBtn, {
                [styles.isActive]: isOpenMenu,
              })}
              onClick={showHideMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
