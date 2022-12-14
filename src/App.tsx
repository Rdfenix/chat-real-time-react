import React from "react";

import { Routes, Route } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { ChatRoomPage } from "./pages/ChatRoom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Layout } from "./shared/components/Layout";
import { Navigate } from "react-router-dom";

function RequireAuth() {
  function getUserLocalstorage(): boolean {
    const userLoggerd = String(localStorage.getItem("USER_VALIDATE"));
    const user = !!JSON.parse(userLoggerd);
    return user;
  }

  return getUserLocalstorage() ? <Layout /> : <Navigate to="signin" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<RequireAuth />}>
        <Route path="home" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat/room/:chatId" element={<ChatRoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;
