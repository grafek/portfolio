export default function Input({
  label,
  register,
  required,
  inputType,
  errors,
  textArea = false,
}) {
  const requiredAsterisk = required ? (
    <span className="text-red-500 font-semibold">*</span>
  ) : null;

  const inputContent = textArea ? (
    <textarea
      name={label}
      {...register(label, { required })}
      className={` ${
        errors ? "border-red-500" : " border-gray-400"
      } w-full max-h-[200px] bg-transparent border-b py-1 mt-1 focus:outline-none focus:rounded-md  md:h-40 focus:ring-1`}
    ></textarea>
  ) : (
    <input
      type={inputType}
      name={label}
      className={`w-full bg-transparent border-b py-1 mt-1 focus:outline-none focus:rounded-md focus:ring-1 ${
        errors ? "border-red-500" : "border-gray-400"
      }`}
      {...register(label, { required })}
    />
  );

  return (
    <>
      <label
        htmlFor={label}
        aria-invalid={errors ? "true" : "false"}
        className="mt-8 relative z-30"
      >
        {label}
        {requiredAsterisk}
        {inputContent}
        {errors?.type === "required" ? (
          <span
            role={"alert"}
            className="text-red-500 absolute top-6 left-0 font-normal pt-2 -z-10"
          >
            {label} is required!
          </span>
        ) : null}
      </label>
    </>
  );
}
