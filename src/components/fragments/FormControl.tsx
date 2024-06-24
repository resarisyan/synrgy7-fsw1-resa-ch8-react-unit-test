/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, ReactElement } from 'react';

interface FormControlProps {
  isInvalid?: boolean;
  children: ReactNode;
  className?: string;
  formLayout?: 'horizontal' | 'vertical';
}

const FormControl: React.FC<FormControlProps> = ({
  isInvalid,
  children,
  className,
  formLayout,
}) => {
  const renderedChildren = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      className={`flex flex-wrap mb-4 ${className} ${
        formLayout === 'horizontal' ? 'md:flex-row' : 'md:flex-col'
      }`}
    >
      {renderedChildren.map((child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            isInvalid,
            formLayout,
          });
        }
        return child;
      })}
    </div>
  );
};

interface FormLabelProps {
  children: ReactNode;
  isInvalid?: boolean;
  required?: boolean;
  className?: string;
  formLayout?: 'horizontal' | 'vertical';
  [key: string]: any;
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  required,
  isInvalid,
  className,
  formLayout,
  ...props
}) => {
  return (
    <div className={formLayout === 'horizontal' ? 'md:w-1/3' : ''}>
      <label
        className={`block uppercase tracking-wide text-sm font-bold mb-2 ${className} ${
          isInvalid ? 'text-red-500' : ''
        }`}
        {...props}
      >
        {children}
        {required && <span className="text-red-500"> *</span>}
      </label>
    </div>
  );
};

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  isInvalid?: boolean;
  formLayout?: 'horizontal' | 'vertical';
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  isInvalid,
  className,
  formLayout,
  ...props
}) => {
  return (
    <div className={formLayout === 'horizontal' ? 'w-full md:w-2/3' : ''}>
      {props.type === 'checkbox' ? (
        <input className="checkbox" {...props} />
      ) : (
        <input
          className={`
        ${props.type === 'file' ? 'file-input' : 'input'}
        appearance-none input-bordered w-full max-w-xs border border-gray-300 rounded text-gray-700 leading-tight focus:outline-none focus:border-gray-500 ${className} ${
            isInvalid ? 'border-red-500' : ''
          }`}
          {...props}
        />
      )}
    </div>
  );
};

interface TextareaProps {
  className?: string;
  isInvalid?: boolean;
  formLayout?: 'horizontal' | 'vertical';
  [key: string]: any;
}

const Textarea: React.FC<TextareaProps> = ({
  isInvalid,
  className,
  formLayout,
  ...props
}) => {
  return (
    <div className={formLayout === 'horizontal' ? 'w-full md:w-2/3' : ''}>
      <textarea
        className={`textarea input-bordered w-full max-w-xs border border-gray-300 rounded text-gray-700 leading-tight focus:outline-none focus:border-gray-500 ${className} ${
          isInvalid ? 'border-red-500' : ''
        }`}
        {...props}
      />
    </div>
  );
};

interface FormErrorMessageProps {
  children: ReactNode;
  isInvalid?: boolean;
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  children,
  isInvalid,
}) => {
  return (
    <div className="w-full my-1">
      <p className={`text-red-500 text-xs italic ${isInvalid ? '' : 'hidden'}`}>
        {children}
      </p>
    </div>
  );
};

export { FormControl, FormLabel, Input, FormErrorMessage, Textarea };
