import axios from "axios";

const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:8080/api/";

const api = axios.create({
  baseURL: `${backendUrl}`,
  withCredentials: true,
});
export default api;
