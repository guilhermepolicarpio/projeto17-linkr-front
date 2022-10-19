import React from "react";
import  ReactDOM  from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./layouts/header";

const rootHtml= document.querySelector(".root");

export default function App(){

    return(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, rootHtml);