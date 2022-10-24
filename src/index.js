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
import postsContext from "./context/postsContext";

import UserPage from "./pages/UserPage";


const rootHtml = document.querySelector(".root");

export default function App() {
  
  const [userInfos, setUserInfos] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <userContext.Provider value={{ userInfos, setUserInfos }}>
        <postsContext.Provider value={{list, setList}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/user/:id" element={<UserPage />} />

          </Routes>
        </BrowserRouter>
        </postsContext.Provider>
      </userContext.Provider>
    </>
  );
}

const root = createRoot(rootHtml);
root.render(<App />);
