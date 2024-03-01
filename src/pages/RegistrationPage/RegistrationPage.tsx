import React, { useState } from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './style.css';
import { validate } from './validate';
import { chekBlure } from './chekBlure';

export const RegistrationPage = () => {
  const [errorText, setErrorText] = useState({
    errorFirstname: '',
    errorSecondname: '',
    errorPassword: '',
    errorEmail: '',
  });
  const [dataValue, setDataValue] = useState({
    firstname: '',
    secondname: '',
    password: '',
    email: '',
  });
  const [isEror, setEror] = useState(false);

  const handlerInput = (e: React.FormEvent<HTMLInputElement>) => {
    validate(e);
    // const handlerValue = e.currentTarget.value;
    // return handlerValue;
  };
  const blure = (e: React.FormEvent<HTMLInputElement>) => {
    const f = chekBlure(e) ?? { error: false, text: '' };

    switch (e.currentTarget.name) {
      case 'Имя':
        if (f.error === true) {
          setErrorText({ ...errorText, errorFirstname: f.text });
          setDataValue({ ...dataValue, firstname: '' });
        } else {
          setDataValue({ ...dataValue, firstname: e.currentTarget.value });
          setErrorText({ ...errorText, errorFirstname: f.text });
        }

        break;
      case 'Фамилия':
        if (f.error === true) {
          setErrorText({ ...errorText, errorSecondname: f.text });
          setDataValue({ ...dataValue, secondname: '' });
        } else {
          setDataValue({ ...dataValue, secondname: e.currentTarget.value });
          setErrorText({ ...errorText, errorSecondname: f.text });
        }

        break;
      case 'Пароль':
        if (f.error === true) {
          setErrorText({ ...errorText, errorPassword: f.text });
          setDataValue({ ...dataValue, password: '' });
        } else {
          setDataValue({ ...dataValue, password: e.currentTarget.value });
          setErrorText({ ...errorText, errorPassword: f.text });
        }

        break;
      case 'E-mail':
        if (f.error === true) {
          setErrorText({ ...errorText, errorEmail: f.text });
          setDataValue({ ...dataValue, email: '' });
        } else {
          setDataValue({ ...dataValue, email: e.currentTarget.value });
          setErrorText({ ...errorText, errorEmail: f.text });
        }

        break;
    }
    if (
      dataValue.firstname &&
      dataValue.secondname &&
      dataValue.email &&
      dataValue.password
    ) {
      setEror(false);
    } else setEror(true);
    // chekBlure(e);
  };

  return (
    <BaseWrapperForm className="RegForm">
      <form className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <BaseInput
          name="Имя"
          className="RegForm__form_input"
          label="Имя"
          onInput={handlerInput}
          onBlur={blure}
          helperText={errorText.errorFirstname}
          isError={errorText.errorFirstname ? isEror : false}
        />
        <BaseInput
          name="Фамилия"
          className="RegForm__form_input"
          label="Фамилия"
          onInput={handlerInput}
          onBlur={blure}
          helperText={errorText.errorSecondname}
          isError={errorText.errorSecondname ? isEror : false}
        />
        <PasswordInput
          name="Пароль"
          className="RegForm__form_input"
          label="Пароль"
          OuterComponent={<IconHint className="RegForm__form_outerIcon" />}
          onInput={handlerInput}
          onBlur={blure}
          helperText={errorText.errorPassword}
          isError={errorText.errorPassword ? isEror : false}
        />
        <BaseInput
          name="E-mail"
          className="RegForm__form_input"
          label="E-mail (корпоративный)"
          plaseholder="example@reliab.tech"
          onInput={handlerInput}
          onBlur={blure}
          helperText={errorText.errorEmail}
          isError={errorText.errorEmail ? isEror : false}
        />
        <BaseButton className="RegForm__buttonSubmit" typeStyle="dark">
          Зарегистрироваться
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
