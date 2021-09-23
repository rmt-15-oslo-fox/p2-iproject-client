import axios from "axios";
const url = "https://movie-forum-iproject.herokuapp.com";

const instance = axios.create({
  baseURL: url,
});

export default instance;
