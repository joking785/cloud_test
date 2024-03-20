import React, { useState } from 'react';
import { BaseInput, BaseInputProps } from '../BaseComponents/BaseInput';
import { BaseButton } from '../BaseButton';
import { IconHide, IconShow } from '../../icons';
import './style.css';
export interface PasswordInputProps extends BaseInputProps {}
export const PasswordInput = (props: PasswordInputProps) => {
  const [isShow, setShow] = useState(false);

  return (
    <BaseInput
      {...props}
      type={isShow ? 'text' : 'password'}
      InnerComponent={
        <BaseButton
          className="Password_button"
          onClick={() => {
            setShow(!isShow);
          }}
        >
          {isShow ? <IconHide /> : <IconShow />}
        </BaseButton>
      }
    />
  );
};
