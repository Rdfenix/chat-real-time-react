import React, { useEffect } from "react";
import styles from "./styles.module.scss";

export function ChatRoom() {
  useEffect(() => {
    return function cleanUp() {
      console.log("passei aqui no final");
    };
  });

  return (
    <>
      <h1>ChatRoom</h1>
    </>
  );
}
