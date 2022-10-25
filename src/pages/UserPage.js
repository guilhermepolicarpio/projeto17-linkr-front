import Header from "../layouts/Header";
import styled from "styled-components";
import userContext from "../context/UserContext";
import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../service/API";


export default function UserPage(){

    const { id} = useParams();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    const { userInfos } = useContext(userContext);


    useEffect(() =>{
    const config = {
        headers: {
            Authorization: `Bearer ${userInfos.token}`,
        },
    }
    setLoading(false);
      getUser(id,config).then((res) =>{
        setUser(res.data)
        setLoading(true);
        console.log(user);
    })
    }, []);


    return(
        <Wrapper>
             <Header/>
             <div>
             <Feed>
                <UserTittle>
                {loading 
                ? 
                <h1>carregado</h1>
                :
                <>
                <h1>carregando</h1>
                </>
                  }
                 </UserTittle>
             </Feed>
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
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
  }
  
`;