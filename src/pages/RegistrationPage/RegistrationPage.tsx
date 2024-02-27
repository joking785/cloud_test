import React, { useState } from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './style.css';
import { validate } from './validate';

export const RegistrationPage = () => {
  const [errorText, setErrorText] = useState({});
  const [dataValue, setDataValue] = useState({
    firstname: '',
    secondname: '',
    password: '',
    email: '',
  });
  const [isEror, setEror] = useState();

  const handlerInput = (e: React.FormEvent<HTMLInputElement>) => {
    validate(e);
    const handlerValue = e.currentTarget.value;
    return handlerValue;
  };
  // const blure = (e) => {};
  return (
    <BaseWrapperForm className="RegForm">
      <form className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <BaseInput
          name="Имя"
          className="RegForm__form_input"
          value={dataValue.firstname}
          label="Имя"
          onInput={handlerInput}
        />
        <BaseInput
          name="Фамилия"
          className="RegForm__form_input"
          value={dataValue.secondname}
          label="Фамилия"
          onInput={handlerInput}
        />
        <PasswordInput
          name="Пароль"
          className="RegForm__form_input"
          value={dataValue.password}
          label="Пароль"
          OuterComponent={<IconHint className="RegForm__form_outerIcon" />}
          onInput={handlerInput}
        />
        <BaseInput
          name="E-mail"
          className="RegForm__form_input"
          value={dataValue.email}
          label="E-mail (корпоративный)"
          plaseholder="example@reliab.tech"
          onInput={handlerInput}
        />
        <BaseButton className="RegForm__buttonSubmit" typeStyle="dark">
          Зарегистрироваться
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
