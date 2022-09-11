import { ReactNode } from "react";

import styles from "./styles.module.scss";

import LogoIcon from "./../../../icons/Let_s_Talk.png";

interface FormSignInSignUpProps {
  children: ReactNode;
  titleHeader: string;
}

export function FormSignInSignUp({
  children,
  titleHeader,
}: FormSignInSignUpProps) {
  return (
    <div className={styles.login_form}>
      <header>
        <img src={LogoIcon} alt="logo" />
        <span>{titleHeader}</span>
      </header>
      {children}
    </div>
  );
}
