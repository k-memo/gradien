"use client"

import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic goes here
      console.log(formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const validateForm = () => {
    if (formData.name.trim() === '') {
      alert('Name must be filled out');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Invalid email address');
      return false;
    }

    if (formData.message.trim() === '') {
      alert('Message must be filled out');
      return false;
    }

    return true;
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="label-error" htmlFor="name">Name:</label><br />
        <input type="text" className="input-error" name="name" value={formData.name} onChange={handleChange} required /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
