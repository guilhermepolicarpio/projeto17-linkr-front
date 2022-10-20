import { useState } from "react";
import { InputsBox, LinkToSignUpPage, Logo, LogoBox, PageContainer, TagLine } from "../css/signIn&signUpStyle"
import {ThreeDots} from 'react-loader-spinner'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../service/API";

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
                <LinkToSignUpPage to='/'>Switch back to log in</LinkToSignUpPage>              
            </InputsBox>
        </PageContainer>
    )
}