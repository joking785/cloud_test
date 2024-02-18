import React, { useState } from 'react';
import { BaseInput, BaseInputProps } from '../BaseComponents/BaseInput';
import { BaseButton } from '../BaseButton';
import { IconHide, IconShow } from '../../icons';
export interface PasswordInputProps extends BaseInputProps {}
export const PasswordInput = (props: PasswordInputProps) => {
  const [isShow, setShow] = useState(false);

  return (
    <BaseInput
      {...props}
      type={isShow ? 'text' : 'password'}
      InnerComponent={
        <BaseButton
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
