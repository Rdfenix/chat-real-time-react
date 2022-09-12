import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FormSignInSignUp } from "../../shared/components/sign_in_sign_up/FormSignInSignUp";
import styles from "./styles.module.scss";

function RegisterForm() {
  return (
    <FormSignInSignUp titleHeader="Sign Up">
      <form>
        <input
          className={styles.register_input}
          type="text"
          placeholder="Name"
        />
        <input
          className={styles.register_input}
          type="text"
          placeholder="Add a login; Ex: test.o"
        />
        <input
          className={styles.register_input}
          type="password"
          placeholder="Password"
        />
      </form>
      <footer className={styles.register_footer}>
        <div className={styles.button_area}>
          <button className={styles.sign_up_button}>Register</button>
        </div>
        <div className={styles.sign_in_area}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Sign In</span>
        </div>
      </footer>
    </FormSignInSignUp>
  );
}

export function SignUp() {
  return (
    <section id={styles.sign_up_section}>
      <RegisterForm />
    </section>
  );
}
