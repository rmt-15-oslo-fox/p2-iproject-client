import axios from "axios";

const server = axios.create({
  baseURL: "https://young-sierra-94381.herokuapp.com",
});

export default server;
