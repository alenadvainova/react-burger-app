import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Toggle from "../SideDrawer/Toggle/Toggle";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Toggle clicked={props.toggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>

    <nav className={styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
