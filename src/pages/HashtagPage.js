import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import userContext from "../context/UserContext";
import styled from "styled-components";
import Post from "../layouts/Post";
import { fetchHashtagPosts } from "../service/API";
import { useParams } from "react-router-dom";
import Trending from "../layouts/Trending";
import Header from "../layouts/Header";

export default function HashtagPage() {
    const { userInfos, setUserInfos } = useContext(userContext);
    const [list, setList] = useState([]);
    const {hashtag} = useParams();

    // checkLogin();

    // function getLocal() {
    //     const user = JSON.parse(localStorage.getItem("linkr"));
    //     return user;
    //   }

    //   function checkLogin() {
    //     console.log('exec checkLogin')
    //     if (userInfos === "" && getLocal()) {
    //       setUserInfos(getLocal());
    //       console.log('busquei do localStorage e coloquei no UserInfos')
    //       console.log('userInfos = ' + userInfos)
    //     } else if (!userInfos) {
    //       Swal.fire({
    //         title: "Ops!",
    //         text: "You are not logged in.",
    //         icon: "error",
    //         confirmButtonText: "Go to login page",
    //       }).then(function () {
    //         window.location = "/";
    //       });
    //     }
    //   }

      useEffect(() => {
        getHashtagPosts(hashtag);
      }, [hashtag]);

      function getHashtagPosts(hash) {
        const promise = fetchHashtagPosts(hash);
        promise
        .then((answer) => {
          setList(answer.data);
        })
        .catch((error) => console.log(error));
      }

      return (
        <Wrapper>
          <Header />
          <div>
            <Feed>
              <h1>{hashtag}</h1>
              {list.map((item, index) => (
                <Post
                  key={index}
                  id={item.id}
                  url={item.url}
                  description={item.description}
                  userName={item.name}
                  userPic={item.userImg}
                  metaTitle={item.title}
                  image={item.image}
                  metaDescription={item.descriptionMeta}
                />
              ))}
            </Feed>
            <Trending />
          </div>
        </Wrapper>
      );
      
    
};

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