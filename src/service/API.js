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

function publishPost(body, headers) {
  const publish = `${URL_BASE}/posts`;
  return axios.post(publish, body, headers);
}

function fetchPosts(headers) {
    const getPosts = `${URL_BASE}/posts`;
    return axios.get(getPosts, headers);
  }

function searchUsers(user,headers){;
  const searchUser = `${URL_BASE}/search/${user}`;
  return axios.get(searchUser,headers)
}

export { postSignUp, postLogin, publishPost, fetchPosts, searchUsers };
