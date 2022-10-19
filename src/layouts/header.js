import styled from "styled-components"
import { VscChevronDown,VscChevronUp } from "react-icons/vsc";
import { Navigate } from "react-router-dom";
import Search from "./search";
import { useState } from "react";

export default function Header(){

    const [logout, setLogout] = useState(false)

    function changeLogout(){
        setLogout(!logout)
    }
    return(

        <HeaderContainer>
            <h1 /*onClick ={() => Navigate('/home')}*/>linkr</h1>
            <Search/>
            <UserMenu onClick={changeLogout}>
                {
                    !logout ?
                    <VscChevronDown/>
                    :
                    <VscChevronUp/>
                }
                <img src = "https://s2.glbimg.com/13jIhS8n-xVsR7vxPAJSdXUu2Z8=/480x543/middle/smart/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/u/9/YZS2J1TMGNDnaxKkOkSA/rindo-de-nervoso.png" alt ="provisoria"/>
            </UserMenu>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
 

    width: 100%;
    height: 72px;
    background-color: #151515;
    position: fixed;
    top:0;
    right: 0;
    font-size: 30px;
    color: #fff;
       

    h1{
        font-family: 'Passion One', cursive;
        height:100%;
        cursor: pointer;
        padding-left: 28px;
    }

   /* @media screen and (max-width: 600px){
        font-size: 26px;
    }*/
`;

const UserMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px 18px;
    font-size: 30px;

    img{
        width: 53px;
        height: 53px;
        opacity: 0.5;
        border-radius: 26.5px;
        margin-left: 16px;
    }

   /* @media screen and (max-width: 600px){
        font-size: 26px;

        img{
            width: 41px;
            height: 41px;
        }
    }*/
`;