import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response || error.message);

    if (error.response?.status === 401) {
      alert("Session expired. Please log in again.");
    }

    return Promise.reject(error);
  }
);

export default api;
