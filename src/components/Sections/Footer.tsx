import { useEffect, useRef, useState } from "react";
import { TextArea, Input, Notification } from "../UI";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { motion as m } from "framer-motion";
import type { TNotification } from "../../../types";
import { formVariants, submitButtonVariants } from "../../utils/framer";
import SectionWrap from "../../hoc/SectionWrap";

type FormSchema = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [notification, setNotification] = useState<TNotification>({
    isShown: false,
  });
  const [btnState, setBtnState] = useState("Send");

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<FormSchema>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSubmitSuccessful && notification.isShown === true) {
        setNotification({ isShown: false });
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification?.isShown, isSubmitSuccessful]);

  const sendEmail = async () => {
    try {
      setBtnState("Sending...");
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_KEY,
      );
      if (res.status === 200) {
        setNotification({
          message: "🎉 Message sent successfully",
          isShown: true,
          isSuccessful: true,
        });
        reset();
      }
    } catch (err) {
      setNotification({
        message: `❌ Something went wrong!`,
        isShown: true,
        isSuccessful: false,
      });
    }
    setBtnState("Send");
  };

  return (
    <footer>
      <div className="mx-auto flex w-3/4 items-center">
        <m.form
          variants={formVariants}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          id="contact"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className={`mx-auto w-full max-w-7xl`}
        >
          <div className="grid grid-cols-3 gap-4 font-medium">
            <div className="relative col-span-3 lg:col-span-1">
              <Input
                register={register}
                error={errors.name}
                validation={{ required: true }}
                labelname={"Name"}
                name="name"
                autoComplete="name"
                required
              />
            </div>
            <div className="relative col-span-3 lg:col-span-1">
              <Input
                register={register}
                validation={{
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                }}
                labelname={"Email"}
                error={errors.email}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="relative col-span-3 lg:col-span-1">
              <Input
                register={register}
                validation={{ required: true }}
                labelname={"Subject"}
                error={errors.subject}
                name="subject"
                autoComplete="subject"
                required
              />
            </div>
            <div className="relative col-span-3">
              <TextArea
                register={register}
                labelname={"Message"}
                validation={{ required: true }}
                error={errors.message}
                name="message"
                required
              />
            </div>
          </div>
          <m.button
            type="submit"
            variants={submitButtonVariants}
            whileInView={"animate"}
            className={`mx-auto mt-4 flex rounded-md border border-indigo-700 bg-indigo-700 px-4 py-2 font-medium tracking-wide text-white duration-300 hover:bg-transparent hover:text-black dark:border-indigo-700 dark:hover:bg-transparent dark:hover:text-white md:px-6`}
          >
            {btnState}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="ml-2 text-cyan-500"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </m.button>
        </m.form>
      </div>
      <Notification notification={notification} />
      <p className={`mt-4 text-center font-medium`}>
        ©{new Date().getFullYear()} Jacek Grafender
      </p>
    </footer>
  );
};
export default SectionWrap(Footer, "footer", "Let's talk", "pt-12");
