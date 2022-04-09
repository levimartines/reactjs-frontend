import { API_URL } from '../Constants';
import axios, { AxiosRequestConfig } from 'axios';
import jwt_decode from 'jwt-decode';

export const LOGIN_SESSION = 'authUser';

class AuthenticationService {

  registerSuccessfulLogin(username: string, token: string) {
    localStorage.setItem(LOGIN_SESSION, username);
    localStorage.setItem('token', token);
    this.setupAxiosInterceptors(token);
  }

  tryLogin(email: string, password: string) {
    let login = {email, password};
    return axios.post(API_URL + "login", login);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem(LOGIN_SESSION);
  }

  isUserLoggedIn() {
    const bearerToken = localStorage.getItem('token');
    if (!bearerToken) return false;
    return this.isTokenValid(bearerToken);
  }

  isTokenValid(bearerToken: string) {
    const token = bearerToken.substring(7);
    if (!token) return false;
    const decodedToken: any = jwt_decode(token);
    if (!decodedToken) return false;

    let currentDate = new Date();
    return currentDate.getTime() < decodedToken?.exp * 1000;
  }

  setupAxiosInterceptors(token: string) {
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      if (this.isUserLoggedIn() && token !== null && config.headers) {
        config.headers['Authorization'] = token;
      }
      return config;
    })
  }

}

export default new AuthenticationService();