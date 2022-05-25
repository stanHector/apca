import axios from "axios";
import { BaseURL } from "../api";


const register = (username, role, password) => {
  return axios.post(BaseURL + "signup", {
    username,
    role,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(BaseURL + "authenticate", {
      username,
      password,
    })
    .then((response) => {

      if (response.data.jwttoken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
