import React, { useState, useRef } from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import { inputLimitation } from './inputLimitation';
import { formFieldValidation } from './formFieldValidation';
import './styles.css';
export const ResetPasswordPage = () => {
  const currentPaswordValue = useRef<string>('');
  const [errorText, setErrorText] = useState({
    errorEmail: '',
    errorPassword: '',
    errorConfirmedPassword: '',
  });
  const [dataValue, setDataValue] = useState({
    email: '',
    password: '',
    ConfirmedPassword: '',
  });
  const hundlerImput = (e: React.FormEvent<HTMLInputElement>) => {
    inputLimitation(e);
  };
  const handlerBlure = (e: React.FormEvent<HTMLInputElement>) => {
    const resultValidation = formFieldValidation(e, currentPaswordValue) ?? {
      error: false,
      text: '',
    };
    switch (e.currentTarget.name) {
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
      case 'Подтверждение':
        if (resultValidation.error) {
          setErrorText({
            ...errorText,
            errorConfirmedPassword: resultValidation.text,
          });
          setDataValue({ ...dataValue, ConfirmedPassword: '' });
        } else {
          setDataValue({
            ...dataValue,
            ConfirmedPassword: e.currentTarget.value,
          });
          setErrorText({
            ...errorText,
            errorConfirmedPassword: resultValidation.text,
          });
        }
        break;
    }
  };
  const tooltipText =
    'Пароль должен содержать от 8 до 20 символов. <br /> Только латинские буквы. <br /> Использования символов (#, &, @) не допускается!';
  return (
    <BaseWrapperForm className="ResetForm">
      <form className="ResetForm__form">
        <h1 className="ResetForm__title">Восстановление пароля</h1>
        <BaseInput
          name="E-mail"
          className="ResetForm__form_input"
          plaseholder="example@reliab.tech"
          onInput={hundlerImput}
          onBlur={handlerBlure}
          helperText={errorText.errorEmail}
          isError={!!errorText.errorEmail}
        />
        <PasswordInput
          name="Пароль"
          className="ResetForm__form_input"
          plaseholder="Новый пароль"
          OuterComponent={
            <IconHint
              data-tooltip-id="password"
              data-tooltip-place="right"
              data-tooltip-html={tooltipText}
              className="IconHint"
            />
          }
          onInput={hundlerImput}
          onBlur={handlerBlure}
          helperText={errorText.errorPassword}
          isError={!!errorText.errorPassword}
        />
        <PasswordInput
          name="Подтверждение"
          className="ResetForm__form_input"
          plaseholder="Подтвердите пароль"
          OuterComponent={
            <IconHint
              data-tooltip-id="password"
              data-tooltip-place="right"
              data-tooltip-html={tooltipText}
              className="IconHint"
            />
          }
          onInput={hundlerImput}
          onBlur={handlerBlure}
          helperText={errorText.errorConfirmedPassword}
          isError={!!errorText.errorConfirmedPassword}
        />
        <BaseButton className="ResetForm__buttonSubmit" typeStyle="dark">
          Сменить пароль
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
