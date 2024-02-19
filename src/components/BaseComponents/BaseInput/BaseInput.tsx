import React, { useId, forwardRef } from 'react';
import cn from 'classnames';
import './style.css';
export interface BaseInputProps {
  value: string;
  isError?: boolean;
  name?: string;
  label?: string;
  plaseholder?: string;
  type?: string;
  InnerComponent?: React.ReactNode;
  OuterComponent?: React.ReactNode;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  helperText?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const inputId = useId();
    return (
      <div className={cn('BaseInput', props.className)}>
        {props.label && (
          <label className="BaseInput_label" htmlFor={inputId}>
            {props.label}
          </label>
        )}
        <div
          className={cn(
            'BaseInput_wrapInput',
            props.isError && 'BaseInput--error',
          )}
        >
          <input
            value={props.value}
            ref={ref}
            onInput={(e) => {
              props.onInput && props.onInput(e);
            }}
            onBlur={(e) => {
              props.onBlur && props.onBlur(e);
            }}
            type={props.type}
            id={inputId}
            name={props.name}
            placeholder={props.plaseholder}
            className="BaseInput_input"
          />
          <div className="BaseInput_WrapInnerComponent">
            {props.InnerComponent}
          </div>
          <div className="BaseInput_WrapOuterComponent">
            {props.OuterComponent}
          </div>
        </div>

        {props.helperText && (
          <p
            className={cn(
              'BaseInput_helperText',
              props.isError && 'BaseInput_helperText--error',
            )}
          >
            {props.helperText}
          </p>
        )}
      </div>
    );
  },
);

BaseInput.displayName = 'BaseInput';
