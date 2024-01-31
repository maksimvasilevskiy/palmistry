import _ from 'lodash';
import { type InputHTMLAttributes } from 'react';
import {
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';
import Label from './label';

type Props<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  name: Path<T>;
  label?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  inputClassName?: string;
  maxLength?: number;
};

/// This is react-hook-form compatible version of Input
export default function Input<T extends FieldValues>({
  name,
  label,
  register,
  errors,
  className = 'mb-1',
  inputClassName = '',
  required,
  maxLength,
  ...rest
}: Props<T>) {
  const error = _.get(errors, name) as FieldError | undefined;
  const labelName = label ?? String(name);

  const handleChange = (e: any) => {
    let value = e.target.value.replace(/^0+/, "");
    if ((name === "month" || name === "day") && value.length === 1) {
      value = e.target.value.padStart(2, '0')
    }
    if (maxLength && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    e.target.value = value;
  }

  return (
    <fieldset className={`flex flex-col ${className}`}>
      {labelName && <Label name={labelName} required={required} />}
      <input
        id={name}
        className={`
          h-12 w-full rounded-lg focus:ring-2 focus:ring-secondary disabled:cursor-not-allowed
          bg-[#eff2fd] border-[#dee5f9] border-[2px] disabled:text-gray-400 placeholder:text-gray-400 py-1 px-3 ${inputClassName}
        `}
        type={rest.type}
        onKeyPress={(event) => {
          if (rest.type === "number" && !/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        {...register(name, {
          valueAsNumber: rest.type === "number",
          required,
        })}
        onChange={handleChange}
        {...rest}
      />
    </fieldset>
  );
}