import UserService from './user.service';
import axios from 'axios';

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {};
