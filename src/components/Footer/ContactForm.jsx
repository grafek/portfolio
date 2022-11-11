import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../contexts/Theme";
import { useForm } from "react-hook-form";
import { Input } from "../UI";
import { motion } from "framer-motion";

export default function ContactForm() {
  const themeCtx = useContext(ThemeContext);

  const form = useRef();

  const [animationClasses, setAnimationClasses] = useState();

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();

  let formStatusMessage;
  let btnState = "Send";

  useEffect(() => {
    setAnimationClasses("animate-slideIn");

    const timer = setTimeout(() => {
      if (isSubmitSuccessful) {
        setAnimationClasses("animate-slideOut");
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [isSubmitSuccessful]);

  if (isSubmitting) {
    btnState = "Sending...";
  }
  if (isSubmitSuccessful) {
    btnState = "Send";
    formStatusMessage = (
      <p className={`${animationClasses} text-green-500`}>
        Message sent successfully!
      </p>
    );
  }

  const sendEmail = async () => {
    try {
      const res = await emailjs.sendForm(
        "portfolio-contact",
        "template_tra4ay3",
        form.current,
        "pvd-8fUHrfBMag2xW"
      );
      if (res.status === 200) {
        reset();
      }
    } catch (err) {
      formStatusMessage = (
        <p className={`${animationClasses} text-red-500`}>
          Something went wrong {err}
        </p>
      );
    }
  };

  const contactFormVariants = {
    contactFormHidden: { opacity: 0 },
    contactFormShown: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const contactFormItemVariants = {
    contactFormHidden: { opacity: 0, y: -50, scale: 0.7 },
    contactFormShown: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const submitButtonVariants = {
    submitButtonHidden: { opacity: 0 },
    submitButtonShown: {
      opacity: 1,
      rotate: [0, 0, 0, -10, 10, 0],
      scale: [1, 1, 1, 1.1, 1.2, 1],
      transition: { delay: 2.5 },
    },
  };
  return (
    <form
      id="contact-form"
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className={` ${themeCtx.themeClasses.text} mx-auto w-full max-w-7xl`}
    >
      <motion.div
        variants={contactFormVariants}
        initial={"contactFormHidden"}
        whileInView={"contactFormShown"}
        className="grid grid-cols-3 gap-2 md:gap-8 mb-2"
      >
        <motion.div
          variants={contactFormItemVariants}
          className="col-span-3 lg:col-span-1 "
        >
          <Input
            register={register}
            errors={errors.Name}
            inputType="text"
            label={"Name"}
            required
          />
        </motion.div>

        <motion.div
          variants={contactFormItemVariants}
          className="col-span-3 lg:col-span-1"
        >
          <Input
            register={register}
            inputType="email"
            label={"Email"}
            errors={errors.Email}
            required
          />
        </motion.div>
        <motion.div
          variants={contactFormItemVariants}
          className="col-span-3 lg:col-span-1"
        >
          <Input
            register={register}
            inputType="text"
            label={"Subject"}
            errors={errors.Subject}
            required
          />
        </motion.div>
        <motion.div variants={contactFormItemVariants} className="col-span-3">
          <Input
            register={register}
            inputType="text"
            label={"Message"}
            errors={errors.Message}
            required
            textArea
          />
        </motion.div>
      </motion.div>
      <motion.button
        type="submit"
        variants={submitButtonVariants}
        initial={"submitButtonHidden"}
        whileInView={"submitButtonShown"}
        className={`${themeCtx.themeClasses.btnFilled} mx-auto flex`}
      >
        {btnState}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-cyan-500 ml-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
            fill="currentColor"
          />
        </svg>
      </motion.button>
      <br />
      {formStatusMessage}
    </form>
  );
}
