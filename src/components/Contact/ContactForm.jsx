import React from "react";

const ContactForm = () => {
  return (
    <div className="rounded-xl w-[50%]">
      <form className="space-y-4 mt-8 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="block w-full h-8 border-gray-300 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm  dark:border-gray-700 dark:text-gray-300"
              id="name"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full h-8 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm  dark:border-gray-700 dark:text-gray-300"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label
            className="block text-sm font-medium text-black"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm  dark:border-gray-700 dark:text-gray-300 min-h-[130px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
