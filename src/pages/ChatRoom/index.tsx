import React, { useEffect } from "react";
import styles from "./styles.module.scss";

function TalkList() {
  return (
    <>
      <div className={styles.chat_row_you}>
        <div className={`${styles.conversation} ${styles.you}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_they}>
        <div className={`${styles.conversation} ${styles.they}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_you}>
        <div className={`${styles.conversation} ${styles.you}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_they}>
        <div className={`${styles.conversation} ${styles.they}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_you}>
        <div className={`${styles.conversation} ${styles.you}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_they}>
        <div className={`${styles.conversation} ${styles.they}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_you}>
        <div className={`${styles.conversation} ${styles.you}`}>
          fdsafsdasdfdasfadsfdsa fdasfdafdsadafsa fdadfaafdasfadsfdasfdas dfdaf
          fdadfafdafda
        </div>
      </div>
      <div className={styles.chat_row_they}>
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
        <h1>header</h1>
      </header>
      <div className={styles.chat_room_content}>
        <TalkList />
      </div>
      <footer className={styles.chat_room_footer}>
        <h1>header</h1>
      </footer>
    </section>
  );
}
