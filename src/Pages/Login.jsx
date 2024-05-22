import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Login1 from '../assets/images/background2.jpg';

const Login = () => {


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Login successful:', data);
          // Redirect to dashboard or any other page on successful login

        } else {
          console.error('Login failed:', data);
          // Handle error response
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  });

  return (
    <div className="h-[90vh] flex items-center justify-center gap-20 px-4 md:px-8 lg:px-20">
      <div className="flex-shrink-0 h-auto w-auto">
        <img
          src={Login1}
          alt="Login Illustration"
          className="object-contain h-full w-full max-w-md"
        />
      </div>

      <div className="flex flex-col justify-center items-start p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
        <p className="text-gray-500 mb-8">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
          <div>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <div className="flex justify-between">
              <label
                className="block text-sm font-medium text-gray-500 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                className="text-sm font-medium underline underline-offset-2 "
                to="#"
              >
                Forgot password?
              </Link>
            </div>
            <input
              className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            className="w-full bg-purple-500 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 flex justify-between py-3">
          Don't have an account?
          <Link
            to='/signup'
            className="ml-2 font-medium text-gray-900 underline underline-offset-2 "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
