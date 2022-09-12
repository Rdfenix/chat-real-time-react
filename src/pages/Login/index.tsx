import React from "react";
import styles from "./styles.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormSignInSignUp } from "../../shared/components/sign_in_sign_up/FormSignInSignUp";

function LoginForm() {
  return (
    <FormSignInSignUp titleHeader="Sign In">
      <form>
        <input type="text" className={styles.login_input} placeholder="Login" />
        <input
          type="password"
          className={styles.login_input}
          placeholder="Password"
        />
      </form>
      <footer className={styles.login_footer}>
        <div className={styles.button_area}>
          <button className={styles.submit_button}>Submit</button>
        </div>
        <div className={styles.register_area}>
          <span>Register</span>
          <FontAwesomeIcon icon={faArrowRight} />
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
