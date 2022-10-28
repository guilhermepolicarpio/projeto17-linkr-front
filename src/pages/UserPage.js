import Header from "../layouts/Header";
import styled from "styled-components";
import userContext from "../context/UserContext";
import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { followUser, getUser, unfollowUser } from "../service/API";
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
    const [following, setFollowing] = useState(false);
    const [followLoading, setFollowLoading] = useState(false);

    useEffect(() =>{
    const config = {
        headers: {
            Authorization: `Bearer ${userInfos.token}`,
        },
    }
    console.log("useeffect")
    setLoading(false);
      getUser(id,config).then((res) =>{
        setUser(res.data.result)
        setUserNameTittle(res.data.result[0].name)
        setUserNamePicture(res.data.result[0].pictureUrl)
        setFollowing(res.data.follow)
        setLoading(true);
    })
    .catch(res=>{
      console.log(res)
      alert("Error on show user page")
    })
    }, [id]);

    function followFunction(userId){
    
      const config = {
        headers: {
          Authorization: `Bearer ${userInfos.token}`,
        },
      }

     setFollowLoading(true)
  
     if(following){
      console.log(userId)
      unfollowUser(userId).then(()=>{
        console.log("executei following");
        setFollowing(false);
        setFollowLoading(false);
      })
      .catch(res => {
        console.log(res)
        alert("Error on unfollow user");
        setFollowLoading(false);
      })
     }
     else{
      console.log(userId)
      followUser(userId).then(()=>{
        console.log("executei unfollowing");
        setFollowing(true);
        setFollowLoading(false);
      })
      .catch(res => {
        console.log(res)
        alert("Error on follow user");
        setFollowLoading(false);
      })
     }
     }
    
    return(
        <Wrapper>
             <Header/>
             <div>
             <Feed>
                {loading 
                ? <>
                <UserTittle>
                <img src={userNamePicture} alt="user avatar" />
                 <h1> {userNameTittle}'s posts</h1>
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
             <Sidebar>
                <FollowButton follow={following} followLoading={followLoading} onClick ={() => followFunction(userInfos.id)}> 
                {followLoading? (
                  <ThreeDots  height={15} />
                ):
                (following?
                  <h1>Unfollow</h1> 
                    :
                  <h1>Follow</h1> 
                )
                }
                </FollowButton>
                <Trending />
             </Sidebar>

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

const FollowButton = styled.div`
width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

h1{
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
}
`

const Sidebar = styled.div`
display: flex;
flex-direction: column;

`