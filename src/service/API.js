import axios from "axios";

const URL_BASE = "https://grupo2-linkr.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("linkr"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      userId: auth.id
    },
  };
  return config;
}

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
  return axios.post(publish, body, createHeaders());
}

function fetchPosts() {
    const getPosts = `${URL_BASE}/posts`;
    return axios.get(getPosts, createHeaders());
  }

function searchUsers(user,headers){
  const searchUser = `${URL_BASE}/search/${user}`;
  return axios.get(searchUser,headers)
}

function getUser(id){
  const getUsers = `${URL_BASE}/users/${id}`;
  return axios.get(getUsers,createHeaders());
}

function fetchHashtagPosts(hashtag) {
  const getPosts = `${URL_BASE}/hashtags/${hashtag}`
  return axios.get(getPosts);
}

function fetchTrendings() {
  const getTrendings = `${URL_BASE}/hashtags/`
  return axios.get(getTrendings);
}
export { postSignUp, postLogin, publishPost, fetchPosts, searchUsers,getUser, fetchHashtagPosts, fetchTrendings };
