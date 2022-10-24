import axios from "axios";

const URL_BASE = "http://localhost:5000";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("linkr"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
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
  return axios.post(publish, body,createHeaders());
}

function fetchPosts() {
    const getPosts = `${URL_BASE}/posts`;
    return axios.get(getPosts,createHeaders());
  }

function searchUsers(user){;
  const searchUser = `${URL_BASE}/search/${user}`;
  return axios.get(searchUser)
}

export { postSignUp, postLogin, publishPost, fetchPosts, searchUsers };
