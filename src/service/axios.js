import axios from "axios";
import Cookies from 'vue-cookies';

const instanse = axios.create({
  baseURL: 'http://89.223.69.148:8000/api/',
});

instanse.interceptors.request.use(
  function(request) {
    const token = Cookies.get('Token');

    if (token) {
      instanse.defaults.headers = { authorization: token };
    }
    
    return request;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instanse.interceptors.response.use(
  function(response) {
    // const headers = response.headers;

    // if (response.config.url == '/login/') {
    //   if ( headers.authorization ) {
    //     Cookies.set('Token', headers.authorization);
    //   }
    // }

    return response;
  },
  function(error) {
    // Cookies.remove('Token');

    return Promise.reject(error);
  }
);

export default instanse;
