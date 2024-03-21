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
      <a
        className="LoginForm_link"
        href="https://reliab.tech/"
        target="_blank"
        rel="noreferrer"
      >
        <Logo className="BaseWrapperForm_Logo" />
      </a>
    </div>
  );
};
