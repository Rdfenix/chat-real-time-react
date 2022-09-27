import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ChatRoom } from "../../shared/interface/chat";
import { User } from "../../shared/interface/login";
import { StateReducer } from "../../shared/interface/reduxInterface";

type ChatProps = {
  chatState: ChatRoom;
  userId: string;
};

function TalkList({ chatState, userId }: ChatProps) {
  return (
    <>
      {chatState?.messages.map((chat) => {
        const chatRowClass =
          userId === chat.userId ? styles.chat_row_you : styles.chat_row_they;
        const conversationClass =
          userId === chat.userId ? styles.you : styles.they;

        return (
          <div key={chat.userId} className={chatRowClass}>
            <span className={styles.chat_user_name}>{chat?.userName}</span>
            <div className={`${styles.conversation} ${conversationClass}`}>
              {chat?.message}
            </div>
          </div>
        );
      })}
    </>
  );
}

export function ChatRoomPage() {
  const chatId = useParams()?.chatId as string;
  const chatRoomState: ChatRoom = useSelector(
    (state: StateReducer) => state.ChatSingleRoomReducer[chatId]
  );

  const userInfoString = localStorage.getItem("USER_VALIDATE") as string;
  const userInfo = JSON.parse(userInfoString) as User;

  return (
    <section className={styles.chat_room_section}>
      <header className={styles.chat_room_header}>
        <Link to="/chat">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>{chatRoomState?.chatName}</h1>
      </header>
      <div className={styles.chat_room_content}>
        <TalkList chatState={chatRoomState} userId={userInfo.user} />
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
