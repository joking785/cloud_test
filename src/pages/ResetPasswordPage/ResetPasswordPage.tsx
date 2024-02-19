import React from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './style.css';
export const ResetPasswordPage = () => {
  return (
    <BaseWrapperForm className="ResetForm">
      <form className="ResetForm__form">
        <h1 className="ResetForm__title">Восстановление пароля</h1>
        <BaseInput className="RegForm__form_input" value="" label="Имя" />
        <BaseInput className="RegForm__form_input" value="" label="Фамилия" />
        <PasswordInput
          className="RegForm__form_input"
          value=""
          label="Пароль"
          OuterComponent={<IconHint className="RegForm__form_outerIcon" />}
        />
        <BaseInput
          className="RegForm__form_input"
          value=""
          label="E-mail (корпоративный)"
          plaseholder="example@reliab.tech"
        />
        <BaseButton className="RegForm__buttonSubmit" typeStyle="dark">
          Зарегистрироваться
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
