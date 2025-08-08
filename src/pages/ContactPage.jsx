import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoIosText } from "react-icons/io";

import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const form = useRef();

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const isFormValid = () => {
    return (
      formState.name.trim() !== "" &&
      formState.email.trim() !== "" &&
      formState.message.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    setFormState({ name: "", email: "", message: "", subject: "" });
  };

  return (
    <div className="flex flex-col justify-center py-8 pt-0 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-xl font-bold leading-none text-gray-900 dark:text-white">
          Update Profile
        </h2>
      </motion.div>

      <motion.div
        className="mt-4 sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="rounded-lg  p-8 bg-gray-800/5 shadow-xl  sm:py-4 px-4 m-2 sm:m-0 sm:rounded-lg sm:px-10 ">
          <form ref={form} onSubmit={handleSubmit} className="space-y-2">
            <div className={"flex flex-col justify-center items-start mx-1"}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 truncate"
              >
                Subject
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosText
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id={"subject"}
                  name={"title"}
                  type="text"
                  value={formState.subject || ""}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 pl-10 border bg-gray-200 border-gray-100 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                  placeholder="subject"
                />
              </div>
            </div>
            <div className={"flex flex-col justify-center items-start mx-1"}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 truncate"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id={"name"}
                  name={"name"}
                  type="text"
                  value={formState.name || ""}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 pl-10 border bg-gray-200 border-gray-100 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                  placeholder="name"
                />
              </div>
            </div>
            <div className={"flex flex-col justify-center items-start mx-1"}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 truncate"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id={"email"}
                  name={"email"}
                  type="email"
                  value={formState.email || ""}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 pl-10 border bg-gray-200 border-gray-100 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                  placeholder="email"
                />
              </div>
            </div>

            <div className={"flex flex-col justify-center items-start mx-1"}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 truncate"
              >
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiFillMessage
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <textarea
                  id="message"
                  name={"message"}
                  // type='description'
                  value={formState.message || ""}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 pl-10 border bg-gray-200 border-gray-100 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                  placeholder="message"
                  row={5}
                  cols={40}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent
							rounded-md shadow-sm text-sm font-medium dark:text-white text-black/70 focus:outline-none focus:ring-2 focus:ring-offset-2
							   transition duration-150 ease-in-out disabled:opacity-50 `}
              style={{ backgroundColor: "steelblue" }}
              disabled={!isFormValid()}
            >
              {/*{loading ? (*/}
              {/*    <>*/}
              {/*        <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true'/>*/}
              {/*        Loading...*/}
              {/*    </>*/}
              {/*) : (*/}
              {/*)}*/}
              <>
                <BsSendFill className="mr-2 h-5 w-5" aria-hidden="true" />
                Send
              </>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
