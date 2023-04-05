import { useState } from 'react';
import {
  type UseFormRegister,
  type RegisterOptions,
  type Path,
  type FieldValues,
  type FieldError,
} from 'react-hook-form';

export interface TextAreaProps<T extends FieldValues>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>;
  labelname?: string;
  register: UseFormRegister<T>;
  className?: string;
  error?: FieldError;
  validation?: RegisterOptions<T>;
  required?: boolean;
}

const TextArea = <T extends FieldValues>({
  name,
  register,
  validation,
  className,
  error,
  labelname,
  required,
  ...props
}: TextAreaProps<T>) => {
  const errorClassses = error
    ? 'outline-red-500'
    : 'outline-indigo-500 dark:outline-indigo-800';
  const requiredAsterisk = required ? (
    <span className="font-semibold text-red-600">*</span>
  ) : null;

  const WITHIN = 'top-5 -z-20 px-4';

  const FLOAT = 'px-2 top-2 z-20 scale-[0.80]';

  const [labelClasses, setLabelClasses] = useState(WITHIN);

  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} absolute select-none text-xs font-bold uppercase tracking-wide transition-all duration-300 dark:text-gray-500`}
      >
        {labelname} {requiredAsterisk}
      </label>
      <textarea
        {...register(name, validation)}
        id={name}
        aria-invalid={error ? 'true' : 'false'}
        onFocus={() => {
          setLabelClasses(FLOAT);
        }}
        onBlur={(event) => {
          if (event.target.value.trim().length === 0) {
            setLabelClasses(WITHIN);
          }
        }}
        className={`${className} ${errorClassses} mt-1 max-h-[60px] min-h-[40px] w-full rounded-md bg-transparent px-3 pt-4 pb-2 outline outline-1 focus:outline-indigo-800 dark:focus:outline-indigo-600 sm:h-[250px] sm:max-h-[150px] md:max-h-[420px] xl:h-[380px]`}
        {...props}
      />
      {error ? (
        <span role={'alert'} className="text-sm text-red-500 md:text-base">
          {error?.type == 'required' ? 'Required' : null}
        </span>
      ) : null}
    </>
  );
};

export default TextArea;
