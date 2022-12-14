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
import useInterval from "use-interval";

export default function Home() {
  
  const { userInfos, setUserInfos } = useContext(userContext);
  const { list, setList } = useContext(postsContext);
  const [loading, setLoading] = useState(true);
  const [inputState, setInputState] = useState(false);
  const [ number,setNumber]= useState(0);
  const[updated,setUpdated]=useState(false);
  const [updatedPosts,setUpdatedPosts]=useState([]);
  const [count,setCount]= useState(0);
  const [form, setForm] = useState({
    url: "",
    description: "",
    userId: "",
  });
  const [publishButton,setPublishButton] = useState(false);
  const [reloadPage,setReloadPage] = useState(false);

  useEffect(() => {
    setLoading(false);
    setPublishButton(false);
    if (userInfos === "") {
      setUserInfos(JSON.parse(localStorage.getItem("linkr")));
    }
    fetchPosts()
      .then((answer) => {
        setList(answer.data);
        setLoading(true);
        const postFromFollowers = answer.data.filter(value => value.userName !== userInfos.name);
        setNumber(postFromFollowers.length);
      })
      .catch((error) => console.log(error));
    setReloadPage(false);
  }, [reloadPage]);

  useInterval(()=>{
   newPosts();
 },20000);
 
 function newPosts(){
   fetchPosts()
   .then((answer)=>{
    const newPostFromFollowers = answer.data.filter(value => value.userName !== userInfos.name);
     setUpdatedPosts(newPostFromFollowers.length);
     setCount(updatedPosts-number);
   })
   .catch((error) => console.log(error));
   console.log(count);
         if( (updatedPosts !== number  && typeof(updatedPosts) === 'number') && typeof(list)!== 'string' && count > 0){     
       setUpdated(true);
     } else if(updatedPosts === number){
      setUpdated(false);
     }
 };

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      userId: userInfos.id,
    });
  };

  function publishRequest(e) {
    e.preventDefault();
    setInputState(true);
    setPublishButton(true);

    publishPost(form)
      .then((res) => {
        fetchPosts().then((answer) => {
          setList(answer.data);
          setPublishButton(false);
          setInputState(false);
          setForm({
            url: "",
            description: "",
            userId: userInfos.id,
          });
        });
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
              {publishButton ? (
                <button disabled={inputState}>Publishing...</button>
              ) : (
                <button type="submit">Publish</button>
              )}
            </form>
          </Create>
          {updated ? <UpdatePostsButton onClick={()=> {setReloadPage(true)}}> {count} new posts, load more!</UpdatePostsButton> : " " }
          {loading ? (
            <Posts>
              {typeof list !== "string" ? (
                list.map((item, index) => (
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
                ))
              ) : (
                <h3>
                  {list === "zero_following" ? "You don't follow anyone yet. Go search for new friends!????" : "No posts found from your friends ????"}
                </h3>
              )}
            </Posts>
          ) : (
            <Posts>
              <ThreeDots color="#FFFFFF" />
            </Posts>
          )}
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
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 20px;
    align-self: flex-start;
    color: #FFFFFF;
  }
`;
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
`
const UpdatePostsButton = styled.button`
width: 611px;
height: 61px;
left: 241px;
top: 481px;
background: #1877F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`
