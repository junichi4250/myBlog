import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";
import Link from "next/link";
import styles from "./header.module.scss";
import { pagesPath } from "../../../module/url/pagesPath";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.left}>
          <Link href={pagesPath.$url()}>
            <a className={styles.logo}>jun blog</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
