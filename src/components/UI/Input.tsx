import { useState } from "react";
import type {
  UseFormRegister,
  RegisterOptions,
  Path,
  FieldValues,
  FieldError,
} from "react-hook-form";

export interface InputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  labelname?: string;
  register: UseFormRegister<T>;
  className?: string;
  error?: FieldError;
  validation?: RegisterOptions<T>;
  required?: boolean;
}

const Input = <T extends FieldValues>({
  name,
  register,
  className = "",
  error,
  labelname,
  validation,
  required,
  ...props
}: InputProps<T>) => {
  const errorClassses = error
    ? "outline-red-600"
    : "outline-indigo-500 dark:outline-indigo-800";
  const requiredAsterisk = required ? (
    <span className="font-semibold text-red-600">*</span>
  ) : null;

  const WITHIN = "top-5 -z-20 px-4";

  const FLOAT = "px-2 top-2 z-20 scale-[0.80]";

  const [labelClasses, setLabelClasses] = useState(WITHIN);

  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} absolute select-none text-xs font-bold uppercase tracking-wide transition-all duration-300 dark:text-gray-500`}
      >
        {labelname} {requiredAsterisk}
      </label>
      <input
        {...register(name, validation)}
        id={name}
        aria-invalid={error ? "true" : "false"}
        onFocus={() => {
          setLabelClasses(FLOAT);
        }}
        onBlur={(event) => {
          if (event.target.value.trim().length === 0) {
            setLabelClasses(WITHIN);
          }
        }}
        className={`${className} ${errorClassses} mt-1 w-full rounded-md bg-transparent px-3 pb-2 pt-4 outline outline-1 focus:outline-indigo-800 dark:focus:outline-indigo-600`}
        {...props}
      />
      {error ? (
        <span
          role={"alert"}
          className="block pt-1 text-sm text-red-600 md:text-base"
        >
          {error?.type == "required" ? "Required" : null}
          {error?.type == "pattern" ? "Input valid e-mail" : null}
        </span>
      ) : null}
    </>
  );
};

export default Input;
