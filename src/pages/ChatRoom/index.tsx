import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function TalkList() {
  return (
    <>
      <div className={styles.chat_row_you}>
        <span className={styles.chat_user_name}>user name</span>
        <div className={`${styles.conversation} ${styles.you}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_they}>
        <span className={styles.chat_user_name}>user name</span>
        <div className={`${styles.conversation} ${styles.they}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
    </>
  );
}

export function ChatRoom() {
  useEffect(() => {
    return function cleanUp() {
      console.log("passei aqui no final");
    };
  });

  return (
    <section className={styles.chat_room_section}>
      <header className={styles.chat_room_header}>
        <Link to="/chat">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>Name of chat</h1>
      </header>
      <div className={styles.chat_room_content}>
        <TalkList />
      </div>
      <footer className={styles.chat_room_footer}>
        <input
          className={styles.chat_input}
          type="text"
          placeholder="Your message"
        />
        <button className={styles.chat_send_message}>send</button>
      </footer>
    </section>
  );
}
