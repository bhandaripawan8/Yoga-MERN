import React from 'react'

const ContactHeader = () => {
  return (
    <div className="space-y-4 flex flex-col items-center w-full justify-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 border-b border-gray-400">
      Get in Touch
    </h2>
    <p className="text-gray-600 dark:text-gray-400 text-[15px]">
      Have a question or want to work together? Fill out the form below
      and I'll get back to you as soon as possible.
    </p>
  </div>
  )
}

export default ContactHeader