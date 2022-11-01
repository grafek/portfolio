import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../store/ThemeContext";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  // add validation

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = await emailjs.sendForm(
      "portfolio-contact",
      "template_tra4ay3",
      form.current,
      "pvd-8fUHrfBMag2xW"
    );
    console.log(data);
  };

  const themeCtx = useContext(ThemeContext);

  return (
    <form
      id="contact"
      ref={form}
      onSubmit={sendEmail}
      className={` ${themeCtx.themeClasses.text} mx-auto w-full pb-4 max-w-7xl`}
    >
      <h2 className="text-2xl font-bold">Send me a message!</h2>
      <div className="grid grid-cols-3 gap-10 my-10">
        <div className="col-span-3 lg:col-span-1 ">
          <label htmlFor="fullname" className="font-light mt-8">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 border-gray-400"
          />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <label htmlFor="email" className="font-light my-3">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 border-gray-400"
          />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <label htmlFor="subject" className="font-light my-3">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 border-gray-400"
          />
        </div>

        <div className="col-span-3">
          <label htmlFor="message" className="font-light my-3">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="w-full bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 border-gray-400"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className={`${themeCtx.themeClasses.btnFilled} mx-auto flex`}
      >
        Send
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
      </button>
    </form>
  );
}
