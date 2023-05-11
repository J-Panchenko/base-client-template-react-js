import {
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from 'components';
import { motion } from 'framer-motion';
import './InputSample.scss';

type InputSampleProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  registerName: keyof T;
  label?: string;
  errorMessage?: string;
  wrapperStyle?: CSSProperties;
  labelClasses?: string;
  inputClasses?: string;
  wrapperClasses?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function InputSample<T extends FieldValues = FieldValues>(props: InputSampleProps<T>) {
  const {
    register,
    registerName,
    label,
    errorMessage,
    wrapperStyle,
    labelClasses,
    inputClasses,
    wrapperClasses,
    ...inputProps
  } = props;
  const inputName = registerName as T[keyof T];
  const animate = { marginBottom: errorMessage ? '24px' : '0' };
  const wrapperClassName = `input-sample${wrapperClasses ? ` ${wrapperClasses}` : ''}`;
  const labelClassName = `input-sample__label${labelClasses ?
    ` ${labelClasses}` : ''}${errorMessage ?
    ' label-error' : ''}`;
  const inputClassName = `input-sample__input${inputClasses ?
    ` ${inputClasses}` : ''}${errorMessage ?
    ' input-error' : ''}`;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      {label ? (
        <label className={labelClassName} htmlFor={inputName}>
          {label}
        </label>
      ) : null}
      <motion.div className="input-sample__input-wrapper" animate={animate}>
        <input
          className={inputClassName}
          id={inputName}
          {...register(inputName)}
          {...inputProps}
        />
      </motion.div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default InputSample;
