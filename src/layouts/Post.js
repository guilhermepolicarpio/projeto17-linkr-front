import styled from "styled-components";
import {CgTrashEmpty as Trash} from "react-icons/cg";
import { FiHeart as Heart } from "react-icons/fi";
import { FaPen as Edit } from "react-icons/fa";
import { FaComments as Comment } from "react-icons/fa";
import { BiRepost as Repost } from "react-icons/bi";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({ id, url, description, userName, userPic, metaTitle, image, metaDescription }) {

  const navigate = useNavigate();

  function chooseHashtag(hash) {
    let hashtag = hash.split("#")[1];
    navigate(`/hashtags/${hashtag}`);
    return;
  }

  const tagStyle = {
      fontWeight: 700,
      cursor: 'pointer'
  };

  return (
    <Wrapper>
      <div>
        <img src={userPic} alt="user_picture" />
        <Heart size={25} color="#FFFFFF" style={{margin: '20px 0 10px 0'}}/>
        <span>13 likes</span>
        <Comment size={25} color="#FFFFFF" style={{margin: '20px 0 10px 0'}}/>
        <span>47 comments</span>
        <Repost size={28} color="#FFFFFF" style={{margin: '18px 0 9px 0'}}/>
        <span>3 reposts</span>
      </div>
      <div>
        <div>
          <h3>{userName}</h3>
          <div>
            <Edit size={16} color="#FFFFFF" />
            <Trash size={20} color="#FFFFFF" />
          </div>
        </div>    
        <ReactTagify tagClicked={chooseHashtag} tagStyle={tagStyle}>
        <h4>{description}</h4>
        </ReactTagify>
        <Metadata onClick={() => window.open(url, '_blank')} >
          <div>
            <h2>{metaTitle}</h2>
            <h4>
              {metaDescription}
            </h4>
            <p>{url}</p>
          </div>
          <div>
            <img src={image} alt="url_image_preview"/>
          </div>
        </Metadata>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: #000000;
  height: fit-content;
  width: 100%;
  border-radius: 15px;
  margin: 15px 0;
  padding: 15px;

  & > div > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 19px;
    margin-bottom: 12px;
    color: #ffffff;
  }

  h4 {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 12px;
    color: #b7b7b7;
    line-height: 20px;
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
  }
  & > div:nth-child(1) > span {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    padding: 10px 35px 20px 10px;

    & > div:nth-child(1) {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    border-radius: 0;
    padding-bottom: 8px;

    div:nth-child(2) {
        padding-right: 10px;
    }
  }
`;

const Metadata = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 200px;
    padding: 15px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 200px;
    padding: 0;
    object-fit: cover;
  }

  h2 {
    font-family: "Lato", sans-serif;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #cecece;
  }

  h4 {
    width: 100%;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #9b9595;
    margin: 0;
    line-height: 19px;
  }

  p {
    width: 100%;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #cecece;
    line-height: 20px;
    text-decoration: underline;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 0 5px 5px 0;
    object-fit: cover;
  }

  @media only screen and (max-width: 1000px) {
    height: 120px;
    h2 {
        font-size: 14px;
        line-height: 14px;
    }

    h4, p {
        font-size: 14px;
        line-height: 14px;
    }

    img {
        height: 120px;
         width: 120px;
    }
    div:nth-child(1) {
        height: 120px;
        padding: 8px;
    }
    div:nth-child(2) {
        height: 120px;
        width: 120px;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 120px;
    h2 {
        font-size: 12px;
        line-height: 12px;
    }

    h4, p {
        font-size: 12px;
        line-height: 12px;
    }

    img {
        height: 120px;
         width: 100px;
    }
    div:nth-child(1) {
        height: 120px;
        padding: 8px;
    }
    div:nth-child(2) {
        height: 120px;
        width: 100px;
    }
  }
`;
