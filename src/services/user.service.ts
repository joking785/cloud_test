import Keycloak from 'keycloak-js';

const kc = new Keycloak('/kecycloack.json');

const initKeycloak = (onAuthenticatedCallback) => {
  kc.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri:
      window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback();
    } else {
      console.warn('not authenticated!');
      doLogin;
    }
  });
};

const doLogin = kc.login;

const doLogout = kc.logout;

const getToken = () => kc.token;

const updateToken = (succesCallback) =>
  kc.updateToken(5).then(succesCallback).catch(doLogin);

const getUsername = () => kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;

// const API_URL = 'http://10.120.10.26:8080/ ';

// export const getPublicContent = () => {
//   return axios.get(API_URL + 'all');
// };

// export const getUserBoard = () => {
//   return axios.get(API_URL + 'user', { headers: authHeader() });
// };

// export const getModeratorBoard = () => {
//   return axios.get(API_URL + 'mod', { headers: authHeader() });
// };

// export const getAdminBoard = () => {
//   return axios.get(API_URL + 'admin', { headers: authHeader() });
// };
