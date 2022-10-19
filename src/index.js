import React from "react";
import  ReactDOM  from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";

const rootHtml= document.querySelector(".root");

export default function App(){

    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, rootHtml);