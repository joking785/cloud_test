import React from 'react';
import { BaseInput } from '../../components/BaseComponents/BaseInput';
import { BaseButton } from '../../components/BaseButton';
import { BaseWrapperForm } from '../../components/BaseComponents/BaseWrapperForm';
import { PasswordInput } from '../../components/PasswordInput';
import { IconHint } from '../../icons';
import './styles.css';
export const ResetPasswordPage = () => {
  return (
    <BaseWrapperForm className="ResetForm">
      <form className="ResetForm__form">
        <h1 className="ResetForm__title">Восстановление пароля</h1>
        <BaseInput
          className="ResetForm__form_input"
          value=""
          plaseholder="example@reliab.tech"
        />
        <PasswordInput
          className="ResetForm__form_input"
          value=""
          plaseholder="Новый пароль"
          OuterComponent={<IconHint className="ResetForm__form_outerIcon" />}
        />
        <PasswordInput
          className="ResetForm__form_input"
          value=""
          plaseholder="Подтвердите пароль"
        />
        <BaseButton className="ResetForm__buttonSubmit" typeStyle="dark">
          Сменить пароль
        </BaseButton>
      </form>
    </BaseWrapperForm>
  );
};
