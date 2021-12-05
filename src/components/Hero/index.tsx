// import { Parallax } from "react-parallax";
import { Parallax } from "react-scroll-parallax";
import clsx from "clsx";
import BlockText from "../BlockText";
import styles from "./Hero.module.scss";
import HeroImg from "../../assets/images/Device_Ipad.png";

const Hero = () => {
  return (
    <>
      <section className={clsx(styles.hero)}>
        <div className="container-header">
          <div className={clsx(styles.heroWrap)}>
            <BlockText
              caption="Who we are"
              heading="Engage brand and increase viewability."
              hasH1
              hasBtn
              textBtn="Download now"
              hasLink
              textLink="Learn more"
              isWhite
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus nemo reiciendis natus deleniti. Debitis perspiciatis
            </BlockText>
            <Parallax className="custom-class" y={[-30, 20]} tagOuter="div">
              <img src={HeroImg} alt="hero" />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
