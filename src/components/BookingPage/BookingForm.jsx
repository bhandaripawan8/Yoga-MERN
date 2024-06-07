import React, { useState, useRef } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    booking_date: '',
    num_people: 1,
    total_cost: 0,
    customer_name: '',
    phone_number: '',
    customer_message: ''
  });
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePeopleChange = (amount) => {
    setFormData((prevState) => ({
      ...prevState,
      num_people: Math.max(1, prevState.num_people + amount),
      total_cost: Math.max(1, prevState.num_people + amount) * 100 // Assuming each person costs 100 units
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('booking_date', formData.booking_date);
    data.append('num_people', formData.num_people);
    data.append('total_cost', formData.total_cost);
    data.append('customer_name', formData.customer_name);
    data.append('phone_number', formData.phone_number);
    data.append('customer_message', formData.customer_message);
    if (file) {
      data.append('file_upload', file);
    }

    try {
      const response = await axios.post('http://localhost:3000/api/booking', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Booking successful:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="w-[500px] m-10 border border-purple-500 shadow-lg rounded-lg p-5">
      <div className='text-3xl font-bold m-4'>
        <h3>Let's move ahead with your Yoga Adventure!</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-purple-500 dark:text-purple-500">From: <span className="text-purple-700 dark:text-purple-500 font-bold">Rs. 0,00</span></div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Date</label>
          <input type="date" name="booking_date" value={formData.booking_date} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1 border-purple-400 bg-white dark:text-purple-500" required />
        </div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Adults</label>
          <div className="flex items-center border rounded-lg p-2 mt-1 border-purple-300 dark:border-purple-600 bg-white text-purple-700 dark:text-purple-200">
            <button type="button" onClick={() => handlePeopleChange(-1)} className="text-purple-500 dark:text-purple-500">-</button>
            <span className="mx-2 text-purple-500 dark:text-purple-500">{formData.num_people}</span>
            <button type="button" onClick={() => handlePeopleChange(1)} className="text-purple-500 dark:text-purple-500">+</button>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Customer Name</label>
          <input type="text" name="customer_name" value={formData.customer_name} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1 border-purple-300 dark:border-purple-600 bg-white text-purple-700 dark:text-purple-200" required />
        </div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Phone Number</label>
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-500" required />
        </div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Message</label>
          <textarea name="customer_message" value={formData.customer_message} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1 border-purple-300 dark:border-purple-600 bg-white text-purple-700 dark:text-purple-200"></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-purple-700 dark:text-purple-500">Upload File</label>
          <p className='my-2'>Please use the QR code on the right to make the payment and upload the screenshot of the successful payment below.</p>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="w-full border rounded-lg p-2 mt-1 border-purple-300 dark:border-purple-600 bg-white dark:bg-purple-900 text-purple-700 dark:text-purple-200" />
          {file && (
            <div className="mt-2">
              <span className="text-purple-700 dark:text-purple-500">{file.name}</span>
              <button type="button" onClick={handleFileRemove} className="ml-2 text-red-500 dark:text-red-500">Remove</button>
            </div>
          )}
        </div>
        <div className="mt-4 text-lg font-bold text-purple-700 dark:text-purple-500">Total Rs.{formData.total_cost.toFixed(2)}</div>
        <button type="submit" className="w-full bg-purple-500 dark:bg-purple-700 text-white dark:text-white py-2 rounded-lg mt-4">Book now</button>
      </form>
    </div>
  );
};

export default BookingForm;
