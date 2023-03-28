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
  errors?: FieldError;
  validation?: RegisterOptions<T>;
  required?: boolean;
}

const TextArea = <T extends FieldValues>({
  name,
  register,
  validation,
  className,
  errors,
  labelname,
  required,
  ...props
}: TextAreaProps<T>) => {
  const errorClassses = errors
    ? 'outline-red-500'
    : 'focus:outline-blue-500 outline-[#30363d]';
  const requiredAsterisk = required ? (
    <span className="font-semibold text-red-500">*</span>
  ) : null;

  return (
    <>
      <label htmlFor={name}>
        {labelname} {requiredAsterisk}
      </label>
      <textarea
        {...register(name, validation)}
        id={name}
        className={`${className} ${errorClassses} mt-1 max-h-[60px] min-h-[40px] w-full rounded-md bg-transparent px-3 py-2 outline outline-1 focus:outline-none focus:ring-1 sm:max-h-[150px] sm:h-[250px] xl:h-[380px] md:max-h-[420px]`}
        {...props}
      />
      {errors?.type === 'required' ? (
        <span role={'alert'} className="text-sm text-red-500 md:text-base">
          {errors ? 'This field is required!' : errors}
        </span>
      ) : null}
    </>
  );
};

export default TextArea;
