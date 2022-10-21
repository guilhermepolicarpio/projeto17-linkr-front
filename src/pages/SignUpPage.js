import { useState } from "react";
import {ThreeDots} from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../service/API";
import styled from "styled-components";

export default function SignUpPage(){
   
    const [form,setForm]=useState({
        email:"",
        password:"",
        username:"",
        pictureUrl:""
    });
    const [inputState,setInputState]=useState(false);
    const [loading,setLoading]=useState(true);

    const navigate = useNavigate();
    
    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function signUpRequest(e){
        e.preventDefault();
        setInputState(true);
        setLoading(false);
        
        postSignUp(form).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Sucess!',
                text: 'user registered successfully',
            })
            navigate('/');
        }).catch((error)=>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: `${error.response.data}`
            });
            setForm({
                email:"",
                password:"",
                username:"",
                pictureUrl:""
            });
            setInputState(false);
            setLoading(true);
        });
    }

    return (
        <PageContainer>
            <LogoBox>
                <Logo>
                    linkr
                </Logo>
                <TagLine>
                save, share and discover the best links on the web
                </TagLine>
            </LogoBox>
            <InputsBox onSubmit={signUpRequest}>
                <input required disabled={inputState} type="email" name="email" placeholder="e-mail" value={form.email} onChange={handleForm}></input>
                <input required disabled={inputState} type="password" name="password" placeholder="password" value={form.password} onChange={handleForm}></input>
                <input required disabled={inputState} type="text" name="username" placeholder="username" value={form.username} onChange={handleForm}></input>
                <input required disabled={inputState} type="text" name="pictureUrl" placeholder="picture url" value={form.pictureUrl} onChange={handleForm}></input>
                {loading?<button>Sign Up</button> : <button disabled={inputState}><ThreeDots color="#FFFFFF" height={20} width={50}/></button> } 
                <LinkToSignUpPage to='/login'>Switch back to log in</LinkToSignUpPage>              
            </InputsBox>
        </PageContainer>
    )
}

const PageContainer = styled.div`
min-height: 100vh;
display: flex;
justify-content: space-between;
    @media screen and (max-width: 600px){
        display: block;
    }
`
const LogoBox = styled.div`
width: 100%;
background: #151515;
box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
justify-content: center;
padding:70px;
`
const Logo= styled.div`
font-family: Passion One;
font-style: normal;
font-weight: 700;
font-size: 106px;
line-height: 117px;
letter-spacing: 0.05em;
color: #FFFFFF;
`

const TagLine=styled.div`
font-family: Oswald;
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
`
const InputsBox= styled.form`
width: 70%;
background-color: #333333;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

@media screen and (max-width: 600px){
        width: 100%;
        margin-top: 10%;
    }

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
const LinkToSignUpPage = styled(Link)`
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