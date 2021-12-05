import clsx from "clsx";
// import { Parallax, Background } from "react-parallax";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import BlockText from "../BlockText";
import styles from "./Tech.module.scss";
import Image from "../../assets/images/Phone.jpg";

const Tech = () => {
  return (
    <>
      <section className={clsx(styles.tech)}>
        {/* <div className="container"> */}

        <div
          className={clsx(styles.techWrap)}
          // style={{ backgroundImage: `url(${Image})` }}
        >
          <ParallaxBanner
            layers={[{ image: `${Image}`, amount: 0.1 }]}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BlockText
              hasH1={false}
              heading="Integrated tech"
              caption="Eyebrow"
              isCenter
              hasBtn
              textBtn="Contact Us"
              isWhite
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            </BlockText>
          </ParallaxBanner>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Tech;
