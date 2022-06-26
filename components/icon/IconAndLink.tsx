import React from "react";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import styles from "./iconAndLink.module.css";

type Props = {
  iconType: IconType;
  label: string;
  externalLink: string;
  className: string;
};

type IconType = "TWITTER" | "GITHUB";

// 引数で受け取った種類のiconへ変更
const selectedIcon = (icontype: IconType): JSX.Element => {
  switch (icontype) {
    case "TWITTER":
      return <TwitterIcon />;
    case "GITHUB":
      return <GithubIcon />;
  }
};

const IconAndLink: React.FC<Props> = ({
  iconType,
  label,
  externalLink,
  className,
}) => {
  return (
    <a
      href={externalLink}
      target="_blank"
      className={`${styles.iconAndLink} ${className}`}
      rel="noreferrer"
    >
      <div className={styles.icon}>{selectedIcon(iconType)}</div>

      <div className={styles.flexContainer}>
        <div className={styles.label}>{label}</div>
      </div>
    </a>
  );
};

export default IconAndLink;
