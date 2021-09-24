import axios from "axios";

const server = axios.create({
  baseURL: "https://favcourse-be.herokuapp.com",
});

export default server;
