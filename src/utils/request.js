import axios from "axios";

const request = axios.create({
  baseURL: "http://liufusong.top:8080",
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  config.headers.Authorization = token;
  return config;
});
export default request;
