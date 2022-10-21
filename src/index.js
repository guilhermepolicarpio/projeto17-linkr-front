import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import userContext from "./context/UserContext";

const rootHtml = document.querySelector(".root");

export default function App() {
  const [userInfos, setUserInfos] = useState("");

  return (
    <>
      <GlobalStyle />
      <userContext.Provider value={{ userInfos, setUserInfos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

const root = createRoot(rootHtml);
root.render(<App />);
