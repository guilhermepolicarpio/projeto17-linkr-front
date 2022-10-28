import Header from "../layouts/Header";
import styled from "styled-components";
import userContext from "../context/UserContext";
import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../service/API";
import Post from "../layouts/Post";
import { ThreeDots } from "react-loader-spinner";
import Trending from "../layouts/Trending";

export default function UserPage(){

    const { id} = useParams();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    const { userInfos } = useContext(userContext);
    const [userNameTittle, setUserNameTittle] = useState([]);
    const [userNamePicture, setUserNamePicture] = useState([]);

    useEffect(() =>{
    setLoading(false);
      getUser(id).then((res) =>{
        console.log(res.data);
        console.log(res.data.rows);
        setUser(res.data.rows);
        setUserNameTittle(res.data.rows.name);
        setUserNamePicture(res.data.rows.pictureUrl);
        setLoading(true);
    })
    }, [id]);

    return(
        <Wrapper>
             <Header/>
             <div>
             <Feed>
                {loading 
                ? <>
                <UserTittle>
                <img src={userNamePicture} alt="user avatar" />
                 <h1> {userNameTittle}' posts</h1>
                 </UserTittle>
                <Posts>
                  {user.map((item, index) => (
                      <Post
                        key={index}
                        id={item.id}
                        url={item.url}
                        description={item.description}
                        userName={item.userName}
                        userPic={item.pictureUrl}
                        metaTitle={item.metaTitle}
                        image={item.image}
                        metaDescription={item.metaDescription}
                      />
                    ))}
                </Posts>
                </>
                :
                <Posts>
                <ThreeDots color="#FFFFFF"/>
              </Posts> 
                  }
             </Feed>
             <Trending />
             </div>
        </Wrapper>
    )
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
    padding-top:160px;
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

const UserTittle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    margin-bottom: 25px;
    margin-left: 15px;
    justify-content: center;
  }

  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  
`;

const Posts = styled.div`
width: 100%;
min-height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`