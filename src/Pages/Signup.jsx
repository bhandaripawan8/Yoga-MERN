import React,{useState} from 'react';
import Login1 from '../assets/images/photoshoot7.jpg';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';


const Signup = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Registration successful:', data);
          setIsRegistered(true);
          toast.success(data.message);
        } else {
          console.error('Registration failed:', data);
          toast.error(data.message)
        }
      } catch (error) {
        console.error('Error registering the user:', error);
        toast.error(data.message)
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
        <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
        <p className="text-gray-500 mb-8">
          Get started with our platform today.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
          <div>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
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
            Register
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 flex justify-between py-3">
          Already have an account?
          <Link
            to='/login'
            className="ml-2 font-medium text-gray-900 underline underline-offset-2"
          >
            Login
          </Link>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
