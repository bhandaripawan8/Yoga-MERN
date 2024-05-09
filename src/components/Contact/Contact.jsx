import React from "react";
import contact1 from "../../assets/images/contact1.jpg";

const Contact = () => {
  return (
    <div className="bg-yellow-50 h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto py-12 md:py-24 shadow-xl mt-[20px] px-10 bg-white">
        <div className="flex flex-col justify-center items-center">
          <img
            alt="Yoga pose"
            className="rounded-xl shadow-lg"
            src={contact1}
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-4 ">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 border-b border-gray-400">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-[15px]">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="block w-full h-8 border-gray-300 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full h-8 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-600 focus:ring-purple-600 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 min-h-[130px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
