import React from "react";

import { Routes, Route } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { ChatRoom } from "./pages/ChatRoom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Layout } from "./shared/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat/room/:slug" element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}

export default App;
