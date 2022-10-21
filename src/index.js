import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import { Route, Routes, BrowserRouter, UNSAFE_RouteContext } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import userContext from "./context/UserContext";

const rootHtml= document.querySelector(".root");

export default function App(){

    const[userInfos, setUserInfos] = useState("");

    return(
        <>
            <GlobalStyle />
            <userContext.Provider value={{userInfos,setUserInfos}}>
            <BrowserRouter>
                <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='/login' element={<SignInPage/>}/>
                <Route path='/signUp' element={<SignUpPage/>}/>
                </Routes>
            </BrowserRouter>
            </userContext.Provider>
        </>
    )
}

ReactDOM.render(<App />, rootHtml);