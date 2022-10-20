import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
min-height: 100vh;
display: flex;
justify-content: space-between;
`
export const LogoBox = styled.div`
width: 100%;
background: #151515;
box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
justify-content: center;
padding:70px;
`
export const Logo= styled.div`
font-family: Passion One;
font-style: normal;
font-weight: 700;
font-size: 106px;
line-height: 117px;
letter-spacing: 0.05em;
color: #FFFFFF;
`

export const TagLine=styled.div`
font-family: Oswald;
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
`
export const InputsBox= styled.form`
width: 70%;
background-color: #333333;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

input{
    width: 100%;
    height: 65px;
    background: #FFFFFF;
    border-radius: 6px;
    margin-bottom: 5px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #9F9F9F;
    border: none;
    padding-left: 10px;
}

button{
    width: 100%;
    height: 65px;
    background: #1877F2;
    border-radius: 6px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
export const LinkToSignUpPage = styled(Link)`
font-family: Lato;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
margin-top: 5px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
