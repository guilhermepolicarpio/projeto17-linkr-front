import styled from "styled-components";
import Header from "../layouts/Header";
import Post from "../layouts/Post";

export default function Home(){
    return(
        <Wrapper>
            <Header />
            <Feed>
                <h1>timeline</h1>
                <Create>
                    <div>
                        <img src='https://www.dictionary.com/e/wp-content/uploads/2018/03/chibi.jpg'/>
                    </div>
                    <div>
                        <h3>What are you going to share today?</h3>
                        <input type='url' placeholder="http://..."></input>
                        <textarea placeholder="Awesome article about #javascript"></textarea>
                        <button>Publish</button>
                    </div>
                </Create>
                <Post />
            </Feed>
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
`
const Feed = styled.div`
    display: flex;
	flex-direction: column;
	width: 55%;
	height: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: start;
    padding-top: 160px;

    h1 {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
        margin-bottom: 25px;
    }
`

const Create = styled.div`
    display: flex;
    background-color: #FFFFFF;
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
        font-family: 'Lato', sans-serif;
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
        background-color: #EFEFEF;
        padding: 10px;
        color: #000000;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 15px;
    }

    textarea {
        width: 100%;
        margin: 5px 0;
        border-radius: 5px;
        border: none;
        background-color: #EFEFEF;
        padding: 10px;
        color: #000000;
        resize: none;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 15px;
        min-height: 90px;
    }

    input::placeholder {
        color: #949494;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 15px;
    }

    textarea::placeholder {
        color: #949494;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 15px;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 10%;
        padding: 15px;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 90%;
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
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 14px;
        background-color: #1877F2;
    }
`