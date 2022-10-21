import styled from "styled-components";
import Header from "../layouts/Header";
import Post from "../layouts/Post";
import userContext from "../context/UserContext";
import { useContext } from "react";

export default function Home() {
  
  return (
    <Wrapper>
      <Header />
      <div>
        <Feed>
          <h1>timeline</h1>
          <Create>
            <div>
              <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/chibi.jpg" alt="user avatar" />
            </div>
            <div>
              <h3>What are you going to share today?</h3>
              <input type="url" placeholder="http://..."></input>
              <textarea placeholder="Awesome article about #javascript"></textarea>
              <button>Publish</button>
            </div>
          </Create>
          <Post />
          <Post />
          <Post />
        </Feed>
        <Sidebar>
          <h1>trending</h1>
          <hr />
          <div>
            <p>#javascript</p>
            <p>#react</p>
            <p>#nodejs</p>
            <p>#python</p>
          </div>
        </Sidebar>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  & > div:nth-child(2) {
    display: flex;
    width: 75%;
    height: fit-content;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 160px;
    column-gap: 25px;
  }

  @media only screen and (max-width: 600px) {
    & > div:nth-child(2) {
        width: 100%;
    }
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: start;

  h1 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 1000px) {
    width: 85%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    h1 {
      padding-left: 20px;
    }
  }
`;

const Create = styled.div`
  display: flex;
  background-color: #ffffff;
  height: fit-content;
  width: 100%;
  border-radius: 15px;
  margin: 25px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 16px;
    color: #707070;
  }

  input {
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    background-color: #efefef;
    padding: 10px;
    color: #000000;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
  }

  textarea {
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    background-color: #efefef;
    padding: 10px;
    color: #000000;
    resize: none;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
    min-height: 90px;
  }

  input::placeholder {
    color: #949494;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
  }

  textarea::placeholder {
    color: #949494;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
    padding: 15px;
    min-width: 60px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 85%;
    padding: 25px 25px 25px 0;
  }

  button {
    width: 120px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 14px;
    background-color: #1877f2;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 0;

    div:nth-child(2) {
      padding: 10px 10px;
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: fit-content;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 120px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 15px;
  min-width: 130px;

  h1 {
    padding: 14px 20px;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
  }

  & > div {
    padding: 14px 20px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 19px;
    line-height: 20px;
  }

  hr {
    border: solid 1px #484848;
    width: 100%;
    margin: 0;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
