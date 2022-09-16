import React from "react";

import styles from "./styles.module.scss";

function ChatRoomCard() {
  return (
    <div className={styles.chat_room}>
      <span>Chat Title</span>
    </div>
  );
}

export function Chat() {
  return (
    <section className={styles.chat_section}>
      <header className={styles.chat_page_header}>
        <h1>Chat's room</h1>
        <h2>Select or create a chat room</h2>
      </header>
      <div className={styles.chat_info}>
        <span>
          Qtd of chats <b>(0)</b>
        </span>
      </div>
      <div className={styles.chat_wrapper}>
        <ChatRoomCard />
      </div>
    </section>
  );
}
