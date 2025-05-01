import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://modanova-server.onrender.com/api",
  withCredentials: true,
});



export default axiosInstance;