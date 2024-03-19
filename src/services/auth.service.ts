import axios from 'axios';

const API_URL = 'http://10.120.10.26:8080/ ';

export const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  return axios.post(API_URL + 'signup', {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accesToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
  console.log('test');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);

  return null;
};
