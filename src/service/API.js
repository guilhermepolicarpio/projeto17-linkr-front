import axios from "axios";

const URL_BASE = "http://localhost:5000";

function postSignUp(body) {
  const signUpAPI = `${URL_BASE}/signUp`;
  return axios.post(signUpAPI, body);
}

function postLogin(body) {
  const signIn = `${URL_BASE}/`;
  return axios.post(signIn, body);
}

function publishPost(body) {
  const publish = `${URL_BASE}/posts`;
  return axios.post(publish, body);
}

function fetchPosts() {
    const getPosts = `${URL_BASE}/posts`;
    return axios.get(getPosts);
  }

export { postSignUp, postLogin, publishPost, fetchPosts };
