import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-screen h-screen bg-slate-50 dark:bg-[#1d1f24] dark:text-gray-100 flex justify-center items-center p-4 snap-start scroll-m-[80px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/04acf1cd-6090-4211-954e-5c954ed39291"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-700 dark:text-gray-300 border-teal-500">
            Contact
          </p>
          <p className="py-4 font-medium text-gray-500 dark:text-gray-400">
            // Submit the form below to message me
          </p>
        </div>
        <input
          className="bg-white dark:bg-[#131519] shadow-md rounded-md p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-white dark:bg-[#131519] shadow-md my-4 p-2 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white dark:bg-[#131519] shadow-md rounded-md p-2"
          name="message"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <button className="bg-teal-500 hover:bg-teal-400 shadow-md font-semibold text-lg text-[#1d1f24] px-4 py-2 rounded-md my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
