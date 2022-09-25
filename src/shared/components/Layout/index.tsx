import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  faComment,
  faHouse,
  faCircleUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIcon from "../../icons/Let_s_Talk.png";

export function Layout() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  function toogleSideBar(): void {
    setOpened(!opened);
  }

  function setActiveClass(prop: { isActive: boolean }): string {
    return prop.isActive ? styles.active_link : "";
  }

  function logout(): void {
    navigate("/signin", { replace: true });
  }

  const activeAdded = opened
    ? `${styles.sidebar} ${styles.active}`
    : ` ${styles.sidebar}`;

  const headerText = opened ? "Close" : "Open";

  return (
    <>
      <aside className={activeAdded}>
        <header className={styles.logo_content} onClick={() => toogleSideBar()}>
          <img className={styles.logo_image} src={logoIcon} alt="logo" />
          <span>{headerText}</span>
        </header>
        <ul className={styles.nav_list}>
          <li>
            <NavLink className={setActiveClass} to="/chat">
              <FontAwesomeIcon icon={faComment} inverse />
              <span className={styles.link_name}>Chats</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} to="/home">
              <FontAwesomeIcon icon={faHouse} inverse />
              <span className={styles.link_name}>Home</span>
            </NavLink>
          </li>
        </ul>
        <div className={styles.profile_content}>
          <div className={styles.profile}>
            <div className={styles.profile_details}>
              <FontAwesomeIcon icon={faCircleUser} inverse fontSize={30} />
              <div className={styles.user_detail}>
                <span>User</span>
                <span>Login</span>
              </div>
            </div>
          </div>
          <div className={styles.logout}>
            <button className={styles.logout_button} onClick={() => logout()}>
              <FontAwesomeIcon icon={faDoorOpen} inverse fontSize={20} />
            </button>
          </div>
        </div>
      </aside>
      <section className={styles.principal_content}>
        <Outlet />
      </section>
    </>
  );
}
