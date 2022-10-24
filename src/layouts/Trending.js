import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";

export default function Trending() {
    const [hashtags, setHashtags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = getTrendings(); //services;
        
        promise.then((hash) => {
            const {data} = hash;
            setHashtags([...data]);
        });
    }, []);

    function chooseHashtag(hash) {
        let hashtag = hash.split("#")[1];
        navigate(`/hashtags/${hashtag}`);
        return;
    }

    return (
        <Sidebar>
        <h1>trending</h1>
        <hr />
        <div>
          {hashtags.map((hashtag,index) => {
            hashtag = `#${hashtag}`;
            return (
                <ReactTagify tagClicked={chooseHashtag}>
                    <p key={index}>
                        {hashtag}
                    </p>
                </ReactTagify>
            );
          })}
        </div>
      </Sidebar>
    );

}

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