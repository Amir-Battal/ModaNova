import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"
      ? "http://localhost:5001/api" // أثناء التطوير
      : "https://modanova-server.onrender.com/api", // أثناء الإنتاج
    withCredentials: true,
});


export default axiosInstance;