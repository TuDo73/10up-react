import clsx from "clsx";
// import { Parallax } from "react-parallax";
import { Parallax } from "react-scroll-parallax";
import styles from "./Generate.module.scss";
import Image from "../../assets/images/Device_Mobile.png";
import BlockText from "../BlockText";

const Generate = () => {
  return (
    <>
      <section className={clsx(styles.generate)}>
        <div className="container">
          <div className={clsx(styles.generateWrap)}>
            <Parallax y={[-20, 20]}>
              <img src={Image} alt="banner" />
            </Parallax>
            <BlockText
              hasH1={false}
              isCaptionBlue
              caption="Eyebrow"
              heading="Generating relevant & engaging content"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              a doloremque facere ipsum odit quis qui aut? Nemo libero aliquam
              quibusdam nisi expedita eveniet corporis illo dignissimos eum,
              delectus qui?
            </BlockText>
          </div>
        </div>
      </section>
    </>
  );
};

export default Generate;
