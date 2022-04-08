import { API_URL } from '../Constants';
import axios, { AxiosRequestConfig } from 'axios';

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
    let user = localStorage.getItem(LOGIN_SESSION);
    return user !== null;
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