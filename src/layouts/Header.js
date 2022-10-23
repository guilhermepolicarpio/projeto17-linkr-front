import styled from "styled-components";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Header() {
const navigate = useNavigate();

  const [logout, setLogout] = useState(true);

  const userProfilePicture = JSON.parse(localStorage.getItem("linkr"));

  if (userProfilePicture === null) {
    Swal.fire({
        title: "Ops!",
        text: "You are not logged in.",
        icon: 'error',
        confirmButtonText: 'Go to login page'
    }).then(function() {
        window.location = "/";
    });
  }

  function logoutUser() {
    console.log("usuario deslogado");
    localStorage.removeItem("linkr");
    navigate("/");
  }
  function logoClick() {
    if (logout === false) {
      setLogout(true);
    }
    navigate("/");
  }

  return (
    <HeaderContainer>
      <h1 onClick={logoClick}>linkr</h1>
      <Search setLogout={setLogout} logout={logout} />
      <UserMenu toggle={logout}>
        {logout ? (
          <VscChevronDown onClick={() => setLogout(false)} />
        ) : (
          <>
            <VscChevronUp onClick={() => setLogout(true)} />
            <LogOutBox onClick={logoutUser}>Logout</LogOutBox>
          </>
        )}
        <img src={userProfilePicture.pictureUrl} alt="userProfilePicture" />
      </UserMenu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 72px;
  background-color: #151515;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 30px;
  color: #fff;

  h1 {
    font-family: "Passion One", cursive;
    height: 100%;
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
  cursor: pointer;

  img {
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
const LogOutBox = styled.div`
  display: flex;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  background: #171717;
  border-radius: 0px 0px 20px 20px;
  width: 150px;
  height: 47px;
  position: absolute;
  right: 0;
  top: 72px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  transition: all 10s;
`;
