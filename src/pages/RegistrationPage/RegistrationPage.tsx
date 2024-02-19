import React from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './style.css';
export const RegistrationPage = () => {
  return (
    <BaseWrapperForm className="RegForm">
      <form className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <BaseInput
          className="RegForm__form_input"
          value=""
          label="Имя"
        ></BaseInput>
        <BaseInput
          className="RegForm__form_input"
          value=""
          label="Фамилия"
        ></BaseInput>
        <PasswordInput
          className="RegForm__form_input"
          value=""
          label="Пароль"
          OuterComponent={<IconHint className="RegForm__form_outerIcon" />}
        ></PasswordInput>
        <BaseInput
          className="RegForm__form_input"
          value=""
          label="E-mail (корпоративный)"
          plaseholder="example@reliab.tech"
        ></BaseInput>
        <BaseButton className="RegForm__buttonSubmit" typeStyle="dark">
          Зарегистрироваться
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
