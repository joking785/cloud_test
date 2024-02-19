import React from 'react';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { Login } from '../../icons';
import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';
import './styles.css';

export const LoginPage = () => {
  return (
    <BaseWrapperForm className="LoginForm_container">
      <form className="LoginForm_form">
        <h1 className="LoginForm_title">Облачное хранилище ТН</h1>
        <div className="LoginForm_innerWrapForm">
          <BaseInput
            value=""
            className="LoginForm_input"
            type="email"
            plaseholder="example@reliab.tech"
          />
          <PasswordInput
            className="LoginForm_input"
            type="password"
            InnerComponent={''}
            value=""
            plaseholder="Пароль"
          />
          <div className="LoginForm_support">
            <Link to="/registration" className="LoginForm_link">
              Регистрация
            </Link>
            <Link to="/reset_password" className="LoginForm_link">
              Забыли пароль?
            </Link>
          </div>
          <BaseButton className="LoginButton">
            <Login />
          </BaseButton>
        </div>
      </form>
    </BaseWrapperForm>
  );
};
