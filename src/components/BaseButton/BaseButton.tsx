import React from 'react';
import cn from 'classnames';
import './style.css';
export interface BaseButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  typeStyle?: 'dark';
}

export const BaseButton = (props: BaseButtonProps) => {
  console.log(
    props.typeStyle === 'dark' ? 'BaseButton--dark' : 'BaseButton--default',
  );

  return (
    <button
      onClick={(e) => props.onClick && props.onClick(e)}
      type={props.type || 'button'}
      disabled={props.disabled}
      className={cn(
        'BaseButton',
        props.typeStyle === 'dark' ? 'BaseButton--dark' : 'BaseButton--default', // Получаем стиль кнопки
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

BaseButton.displayName = 'BaseButton';
