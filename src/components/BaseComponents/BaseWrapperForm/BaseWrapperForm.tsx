import React from 'react';
import { Logo } from '../../../icons';
import cn from 'classnames';
import './style.css';

export interface BaseWrapperFormProps {
  children: React.ReactNode;
  className?: string;
}
export const BaseWrapperForm = (props: BaseWrapperFormProps) => {
  return (
    <div className={cn(props.className, 'BaseWrapperForm')}>
      {props.children}
      <Logo className="BaseWrapperForm_Logo" />
    </div>
  );
};
