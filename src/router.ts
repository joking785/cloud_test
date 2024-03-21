import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/registration',
    Component: RegistrationPage,
  },
  {
    path: '/reset_password',
    Component: ResetPasswordPage,
  },
]);
