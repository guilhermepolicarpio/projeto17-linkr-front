import styled from "styled-components";
import Header from "../layouts/Header";
import Post from "../layouts/Post";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import userContext from "../context/UserContext";
import { publishPost, fetchPosts } from "../service/API";
import postsContext from "../context/postsContext";
import Trending from "../layouts/Trending";
import { ThreeDots } from "react-loader-spinner";

export default function Home() {
  const { userInfos, setUserInfos } = useContext(userContext);
  const {list,setList} = useContext(postsContext);
  const [loading, setLoading] = useState(true);
  const [inputState, setInputState] = useState(false);
  

  useEffect(() => {
    setLoading(false)
    fetchPosts().then((answer) => {
      setList(answer.data);
      setLoading(true);
    })
    .catch((error) => console.log(error));
    if(userInfos === ""){
      setUserInfos(JSON.parse(localStorage.getItem("linkr")));
    }
  }, []);

  const [form, setForm] = useState({
    url: "",
    description: "",
    userId: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      userId: userInfos.id,
    });
  }

  function publishRequest(e) {
    e.preventDefault();
    setInputState(true);
    setLoading(false);

    publishPost(form)
      .then((res) => {
        setList(fetchPosts());
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: `${error.response.data}`,
        });
        setInputState(false);
        setLoading(true);
        setForm({
          url: "",
          description: "",
          userId: userInfos.id,
        });
      });
  }

  return (
    <Wrapper>
      <Header />
      <div>
        <Feed>
          <h1>timeline</h1>
          <Create>
            <div>
              <img src={userInfos.pictureUrl} alt="user avatar" />
            </div>
            <form onSubmit={publishRequest}>
              <h3>What are you going to share today?</h3>
              <input
                required
                name="url"
                value={form.url}
                type="url"
                placeholder="http://..."
                onChange={handleForm}
                disabled={inputState}
              ></input>
              <textarea
                name="description"
                value={form.description}
                placeholder="Awesome article about #javascript"
                onChange={handleForm}
                disabled={inputState}
              ></textarea>
              {loading ? (
                <button type="submit">Publish</button>
              ) : (
                <button disabled={inputState}>Publishing...</button>
              )}
            </form>
          </Create>
          {loading? 
                    <Posts>
                    {list.map((item, index) => (
                      <Post
                        key={index}
                        id={item.id}
                        url={item.url}
                        description={item.description}
                        userName={item.userName}
                        userPic={item.userPic}
                        metaTitle={item.metaTitle}
                        image={item.image}
                        metaDescription={item.metaDescription}
                      />
                    ))}
                    </Posts>
                    :
                    <Posts>
                      <ThreeDots color="#FFFFFF"/>
                    </Posts>         
        }

        </Feed>
        <Trending />
      </div>
    </Wrapper>
  );
}

const Posts = styled.div`
width: 100%;
min-height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
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

  form {
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