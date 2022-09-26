import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormSignInSignUp } from "../../shared/components/sign_in_sign_up/FormSignInSignUp";
import { Link } from "react-router-dom";
import { signinAction } from "./../../core/action";

function LoginForm() {
  const dispatch = useDispatch();
  const [signInData, setSignInData] = useState({ user: "", password: "" });

  function login(data: string, field: string): void {
    const item = { ...signInData, [field]: data };

    setSignInData(item);
  }

  function sendLogin(): void {
    dispatch(signinAction(signInData));
  }

  return (
    <FormSignInSignUp titleHeader="Sign In">
      <form>
        <input
          type="text"
          value={signInData.user}
          className={styles.login_input}
          placeholder="Login"
          onChange={(e) => login(e.target.value, "user")}
        />
        <input
          type="password"
          value={signInData.password}
          className={styles.login_input}
          placeholder="Password"
          onChange={(e) => login(e.target.value, "password")}
        />
      </form>
      <footer className={styles.login_footer}>
        <div className={styles.button_area}>
          <button className={styles.submit_button} onClick={() => sendLogin()}>
            Submit
          </button>
        </div>
        <div className={styles.register_area}>
          <Link to="/signup">
            <span>Register</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </footer>
    </FormSignInSignUp>
  );
}

export function LoginPage() {
  return (
    <section id={styles.login_section}>
      <LoginForm />
    </section>
  );
}
