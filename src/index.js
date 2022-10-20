import React from "react";
import  ReactDOM  from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const rootHtml= document.querySelector(".root");

export default function App(){

    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='/login' element={<SignInPage/>}/>
                <Route path='/signUp' element={<SignUpPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, rootHtml);