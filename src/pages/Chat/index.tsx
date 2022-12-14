import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { StateReducer } from "../../shared/interface/reduxInterface";

type ChatRoomCardProps = {
  deleteChat: () => void;
  chatTitle: string;
  chatId: any;
};

function ChatRoomCard({ deleteChat, chatTitle, chatId }: ChatRoomCardProps) {
  return (
    <Link to={`room/${chatId}`} className={styles.chat_room}>
      <span>{chatTitle}</span>
      <button onClick={() => deleteChat()}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </Link>
  );
}

export function Chat() {
  const chats = useSelector((state: StateReducer) => state.ChatRoomsReducer);
  const [chatName, setChatName] = useState("");
  let elementRef: any = useRef();

  function deleteChatRoom(data: string): void {
    /** invok saga method to delete chat */
    console.log(data);
  }

  function setNameOfRoom(data: string) {
    setChatName(data);
  }

  function createRoom() {
    if (chatName) {
      /** action to create chat room  */
    }
  }

  function toggleArea() {
    if (
      elementRef.current.style.maxHeight &&
      elementRef.current.style.maxHeight !== "0px"
    ) {
      elementRef.current.style.maxHeight = "0px";
    } else {
      elementRef.current.style.maxHeight = `${
        elementRef.current.scrollHeight + 30
      }px`;
    }
  }

  return (
    <section className={styles.chat_section}>
      <header className={styles.chat_page_header}>
        <h1>Chat's room</h1>
        <h2>Select or create a chat room</h2>
      </header>
      <div className={styles.chat_create_area}>
        <button
          className={styles.chat_toggle_create_area}
          onClick={() => toggleArea()}
        >
          <FontAwesomeIcon icon={faPlus} />
          Create chat room
        </button>
        <div ref={elementRef} className={styles.chat_create_input}>
          <input
            className={styles.chat_input_name}
            type="text"
            value={chatName}
            onChange={(e) => setNameOfRoom(e.target.value)}
            placeholder="Room name"
          />
          <button
            className={styles.chat_submit_button}
            onClick={() => createRoom()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className={styles.chat_info}>
        <span>
          Qtd of chats <b>({chats.length})</b>
        </span>
      </div>
      <div className={styles.chat_wrapper}>
        {chats.map((chat) => (
          <ChatRoomCard
            key={chat.chatId}
            chatTitle={chat.chatName}
            chatId={chat.chatId}
            deleteChat={() => deleteChatRoom(chat.chatId)}
          />
        ))}
      </div>
    </section>
  );
}
