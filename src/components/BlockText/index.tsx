import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./BlockText.module.scss";

type PropsType = {
  children: ReactNode;
  caption: string;
  hasH1: boolean;
  heading: string;
  isCaptionBlue?: boolean;
  hasBtn?: boolean;
  textBtn?: string;
  isCenter?: boolean;
  hasLink?: boolean;
  textLink?: string;
  isWhite?: boolean;
};
const BlockText = ({
  caption,
  isCaptionBlue,
  hasH1,
  heading,
  hasBtn,
  textBtn,
  children,
  isCenter,
  hasLink,
  textLink,
  isWhite,
}: PropsType) => {
  return (
    <>
      <div
        className={clsx(styles.blockText, {
          [styles.isCenter]: isCenter,
          [styles.isWhite]: isWhite,
        })}
      >
        <h3
          className={clsx(styles.caption, { [styles.isBlue]: isCaptionBlue })}
        >
          {caption}
        </h3>
        {hasH1 ? (
          <h1 className={clsx(styles.headingText)}>{heading}</h1>
        ) : (
          <h2 className={clsx(styles.headingText)}>{heading}</h2>
        )}
        <p className={clsx(styles.textContent)}>{children}</p>
        {hasBtn && (
          <div className={clsx(styles.buttonWrap)}>
            <div className={clsx(styles.button)}>{textBtn}</div>
            {hasLink && (
              <div className={clsx(styles.link)}>
                <a href="#">{textLink}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlockText;
