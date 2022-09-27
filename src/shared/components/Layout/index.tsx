import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  faComment,
  faHouse,
  faCircleUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIcon from "../../icons/Let_s_Talk.png";
import { StateReducer } from "../../interface/reduxInterface";
import { getUserAction } from "../../../core/action";

export function Layout() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector((state: StateReducer) => state.UserReducer);

  const getUser = useCallback(() => dispatch(getUserAction()), [dispatch]);
  const userNav = useCallback(
    () => navigate("/home", { replace: true }),
    [navigate]
  );
  const userLogout = useCallback(
    () => navigate("/signin", { replace: true }),
    [navigate]
  );

  function toogleSideBar(): void {
    setOpened(!opened);
  }

  function setActiveClass(prop: { isActive: boolean }): string {
    return prop.isActive ? styles.active_link : "";
  }

  function logout(): void {
    userLogout();
    localStorage.clear();
  }

  const activeAdded = opened
    ? `${styles.sidebar} ${styles.active}`
    : ` ${styles.sidebar}`;

  const headerText = opened ? "Close" : "Open";

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (location.pathname === "/") {
      userNav();
    }
  }, [location.pathname, userNav]);

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
                <span>{userData.name}</span>
                <span>{userData.user}</span>
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
