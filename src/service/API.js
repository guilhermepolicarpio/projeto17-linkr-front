import axios from 'axios'

const URL_BASE = 'http://localhost:5000'

 function postSignUp(body){
    const signUpAPI = `${URL_BASE}/signUp`;
    return axios.post(signUpAPI,body);
}

function postLogin(body){
    const signIn = `${URL_BASE}/`;
    return axios.post(signIn,body);
}

export  {postSignUp,postLogin};