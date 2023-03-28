import { useEffect, useRef, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { SectionHeading, TextArea } from '../UI';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Input, Notification } from '../UI';
import { motion as m } from 'framer-motion';
import {
  type FormSchema,
  type Notification as NotificationType,
} from '../../../types';
import { formVariants, submitButtonVariants } from '../../utils/framer';

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [notification, setNotification] = useState<NotificationType>({
    isShown: false,
  });
  const [btnState, setBtnState] = useState('Send');

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
      setBtnState('Sending...');
      const res = await emailjs.sendForm(
        'portfolio-contact',
        'template_tra4ay3',
        form.current as HTMLFormElement,
        'pvd-8fUHrfBMag2xW'
      );
      if (res.status === 200) {
        setNotification({
          message: '🎉 Message sent successfully',
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
    setBtnState('Send');
  };

  return (
    <footer id={'contact'} className={`relative h-[100dvh] snap-start`}>
      <div className="container mx-auto flex h-full flex-col justify-between">
        <SectionHeading>Let&apos;s talk</SectionHeading>
        <div className="mx-auto flex h-5/6 max-h-full w-full items-center pl-3 pr-5">
          <m.form
            variants={formVariants}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{ once: true }}
            id="contact-form"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className={` mx-auto w-full max-w-7xl`}
          >
            <div className="mb-2 grid grid-cols-3 gap-2 font-semibold md:gap-8">
              <div className="col-span-3 lg:col-span-1">
                <Input
                  register={register}
                  errors={errors.name}
                  validation={{ required: true }}
                  labelname={'Name'}
                  name="name"
                  required
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <Input
                  register={register}
                  validation={{ required: true }}
                  labelname={'Email'}
                  errors={errors.email}
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <Input
                  register={register}
                  validation={{ required: true }}
                  labelname={'Subject'}
                  errors={errors.subject}
                  name="subject"
                  required
                />
              </div>
              <div className="col-span-3">
                <TextArea
                  register={register}
                  labelname={'Message'}
                  validation={{ required: true }}
                  errors={errors.message}
                  name="message"
                  required
                />
              </div>
            </div>
            <m.button
              type="submit"
              variants={submitButtonVariants}
              whileInView={'submitButtonShown'}
              className={`mx-auto flex rounded-md border border-indigo-700 bg-indigo-700 py-2 px-8 text-white duration-300 hover:bg-transparent hover:text-black dark:border-indigo-700 dark:hover:bg-transparent dark:hover:text-white md:py-3 md:px-12`}
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
            <Notification notification={notification} />
          </m.form>
        </div>
        <div className="mt-auto flex w-full flex-col justify-center space-y-3">
          <a href="#home" className="mx-auto" title="home">
            <BsArrowUp className={`text-2xl`} />
          </a>
          <p className={`text-center font-semibold`}>
            ©{new Date().getFullYear()} Jacek Grafender
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
