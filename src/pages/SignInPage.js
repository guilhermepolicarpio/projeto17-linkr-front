import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { InputsBox, LinkToSignUpPage, Logo, LogoBox, PageContainer, TagLine } from '../styles/signIn&signUpStyle';
import { postLogin } from "../service/API";
import Swal from 'sweetalert2'

export default function SignInPage(){
    
    const [form,setForm]= useState({
        email:"",
        password:""
    });
    const [inputState,setInputState]=useState(false);
    const [loading,setLoading]=useState(true);

    const navigate = useNavigate();

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    function signInRequest(e){
        e.preventDefault();
        setInputState(true);
        setLoading(false);

        postLogin(form).then((response)=>{
            console.log(response.data);
            navigate('/timeline');
        })
        .catch((error)=>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: `${error.response.data}`
            });
            setInputState(false);
            setLoading(true);
            setForm({
                email: "",
                password:""
            });
        });
    };
    
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
            <InputsBox onSubmit={signInRequest}>
                <input required disabled={inputState} type="email" placeholder="e-mail" name="email" value={form.email} onChange={handleForm}></input>
                <input required disabled={inputState} type="password" placeholder="password" name="password" value={form.password} onChange={handleForm}></input>
                {loading ?<button type="submit">Log In</button>: <button disabled={inputState}><ThreeDots color="#FFFFFF" height={20} width={50}/></button> } 
                <LinkToSignUpPage to='/signUp'>First time? Create an account!</LinkToSignUpPage>              
            </InputsBox>
        </PageContainer>
    )
}