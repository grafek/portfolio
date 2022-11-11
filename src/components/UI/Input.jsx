export default function Input({
  label,
  register,
  required,
  inputType,
  errors,
  textArea = false,
}) {
  let requiredAsterisk = required ? (
    <span className="text-red-500 font-semibold">*</span>
  ) : null;

  let inputContent = textArea ? (
    <textarea
      name={label}
      {...register(label, { required })}
      className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md h-24 md:h-40 focus:ring-1 border-gray-400"
    ></textarea>
  ) : (
    <input
      type={inputType}
      name={label}
      className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 border-gray-400"
      {...register(label, { required })}
    />
  );

  return (
    <>
      <label
        htmlFor={label}
        aria-invalid={errors ? "true" : "false"}
        className="font-light mt-8"
      >
        {label}
        {requiredAsterisk}
        {inputContent}
        {errors?.type === "required" ? (
          <span role={"alert"} className="text-red-500 font-semibold pt-2">
            {label} is required!
          </span>
        ) : null}
      </label>
    </>
  );
}
