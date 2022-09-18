import React, { useEffect } from "react";
import styles from "./styles.module.scss";

export function ChatRoom() {
  useEffect(() => {
    return function cleanUp() {
      console.log("passei aqui no final");
    };
  });

  return (
    <section className={styles.chat_room_section}>
      <header className={styles.chat_room_header}>
        <h1>header</h1>
      </header>
      <div className={styles.chat_room_content}>
        <h1>header</h1>
      </div>
      <footer className={styles.chat_room_footer}>
        <h1>header</h1>
      </footer>
    </section>
  );
}
