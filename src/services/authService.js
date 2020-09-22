import http from "./httpService";
import { apiUrl } from "../config.json";
import LoginForm from "./../components/loginForm";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export default {
  login,
  logout,
};
