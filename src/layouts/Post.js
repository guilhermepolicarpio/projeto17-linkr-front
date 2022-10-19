import styled from "styled-components";

export default function Post(){

    return(
        <Wrapper>
            <div>
                <img src='https://www.dictionary.com/e/wp-content/uploads/2018/03/chibi.jpg'/>
            </div>
            <div>
                <h3>Fulano de Tal</h3>
                <h4>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h4>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background-color: #000000;
    height: fit-content;
    width: 100%;
    border-radius: 15px;
    margin: 15px 0;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    h3 {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 19px;
        margin-bottom: 16px;
        color: #FFFFFF;
    }

    
    h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 17px;
        margin-bottom: 16px;
        color: #B7B7B7;
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
`