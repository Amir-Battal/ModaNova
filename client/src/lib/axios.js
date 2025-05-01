import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://modanova-server.onrender.com/api",
  withCredentials: true, // تأكد أنه موجود
});



export default axiosInstance;