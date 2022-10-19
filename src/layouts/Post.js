import styled from "styled-components";

export default function Post() {
  return (
    <Wrapper>
      <div>
        <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/chibi.jpg" />
      </div>
      <div>
        <h3>Fulano de Tal</h3>
        <h4>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
        </h4>
        <Metadata>
          <div>
            <h2>Como aplicar o Material UI em um projeto React</h2>
            <h4>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </h4>
            <p>https://medium.com/@pshrmn/a-simple-react-router</p>
          </div>
          <div>
            <img src="https://images.genius.com/267629b35cc1e6d6b8acd6532a638bd7.700x700x1.jpg" />
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

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    padding: 10px 35px 20px 10px;
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
  overflow: auto;

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
