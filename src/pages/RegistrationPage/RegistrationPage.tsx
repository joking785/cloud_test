import React, { useState } from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './style.css';
import { inputLimitation } from './inputLimitation';
import { formFieldValidation } from './formFieldValidation';

export const RegistrationPage = () => {
  const [errorText, setErrorText] = useState({
    errorFirstName: '',
    errorSecondName: '',
    errorPassword: '',
    errorEmail: '',
  });
  const [dataValue, setDataValue] = useState({
    firstName: '',
    secondName: '',
    password: '',
    email: '',
  });
  const [isError, setError] = useState(false);
  const handlerInput = (e: React.FormEvent<HTMLInputElement>) => {
    inputLimitation(e);
    // const handlerValue = e.currentTarget.value;
    // return handlerValue;
  };
  const handlerBlure = (e: React.FormEvent<HTMLInputElement>) => {
    const resultValidation = formFieldValidation(e) ?? {
      error: false,
      text: '',
    };
    switch (e.currentTarget.name) {
      case 'Имя':
        if (resultValidation.error) {
          setErrorText({ ...errorText, errorFirstName: resultValidation.text });
          setDataValue({ ...dataValue, firstName: '' });
        } else {
          setDataValue({ ...dataValue, firstName: e.currentTarget.value });
          setErrorText({ ...errorText, errorFirstName: resultValidation.text });
        }
        break;
      case 'Фамилия':
        if (resultValidation.error) {
          setErrorText({
            ...errorText,
            errorSecondName: resultValidation.text,
          });
          setDataValue({ ...dataValue, secondName: '' });
        } else {
          setDataValue({ ...dataValue, secondName: e.currentTarget.value });
          setErrorText({
            ...errorText,
            errorSecondName: resultValidation.text,
          });
        }
        break;
      case 'Пароль':
        if (resultValidation.error) {
          setErrorText({ ...errorText, errorPassword: resultValidation.text });
          setDataValue({ ...dataValue, password: '' });
        } else {
          setDataValue({ ...dataValue, password: e.currentTarget.value });
          setErrorText({ ...errorText, errorPassword: resultValidation.text });
        }
        break;
      case 'E-mail':
        if (resultValidation.error) {
          setErrorText({ ...errorText, errorEmail: resultValidation.text });
          setDataValue({ ...dataValue, email: '' });
        } else {
          setDataValue({ ...dataValue, email: e.currentTarget.value });
          setErrorText({ ...errorText, errorEmail: resultValidation.text });
        }
        break;
    }
    if (
      dataValue.firstName &&
      dataValue.secondName &&
      dataValue.email &&
      dataValue.password
    ) {
      setError(false);
    } else setError(true);
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
          onBlur={handlerBlure}
          helperText={errorText.errorFirstName}
          isError={!!errorText.errorFirstName}
        />
        <BaseInput
          name="Фамилия"
          className="RegForm__form_input"
          label="Фамилия"
          onInput={handlerInput}
          onBlur={handlerBlure}
          helperText={errorText.errorSecondName}
          isError={!!errorText.errorSecondName}
        />
        <PasswordInput
          name="Пароль"
          className="RegForm__form_input"
          label="Пароль"
          OuterComponent={<IconHint className="RegForm__form_outerIcon" />}
          onInput={handlerInput}
          onBlur={handlerBlure}
          helperText={errorText.errorPassword}
          isError={!!errorText.errorPassword}
        />
        <BaseInput
          name="E-mail"
          className="RegForm__form_input"
          label="E-mail (корпоративный)"
          plaseholder="example@reliab.tech"
          onInput={handlerInput}
          onBlur={handlerBlure}
          helperText={errorText.errorEmail}
          isError={!!errorText.errorEmail}
        />
        <BaseButton className="RegForm__buttonSubmit" typeStyle="dark">
          Зарегистрироваться
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
