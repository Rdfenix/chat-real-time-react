import React from "react";

import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Layout } from "./shared/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
