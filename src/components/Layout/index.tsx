// Layout.tsx
import React, { useEffect, useState } from "react";
import ScrollToTop from "../../helpers/scrollToTop";
import useWidth from "../../helpers/useWindowSize";
import styles from "./index.module.scss";

const Layout = ({ children }: any) => {

  return (
    <div
      id={styles.width_container}
      className="absolute z-50 w-[52vw] p-4"
    >
      <div
        className={`z-[0] w-full h-full rounded-3xl p-8 overflow-auto`}
        id={styles.wrapper}
      >
        <ScrollToTop />
        {children}
      </div>
    </div>
  );
};

export default Layout;
