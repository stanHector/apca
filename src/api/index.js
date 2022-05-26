import axios from "axios";

export const BaseURL = "https://apcapalliative.herokuapp.com/";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [BaseURL];
        const token = JSON.parse(localStorage.getItem("user"))?.jwttoken;
        console.log(token);
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = ` ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);