"use client";
import React, { useState } from 'react';
import { services } from '@/assets/constants'; // Import the services array
import MyInfo from '@/components/design components/contact page component/MyInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData);
  };

  return (
    <div className="sm:mx-48 mx-10 my-24 sm:flex sm:space-x-10 space-y-10">
      <div className="bg-[#303030] flex flex-col rounded-lg gap-8 w-4/5 px-10 py-8">
        <h1 className="text-blue-600 text-xl font-bold">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-9">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <label htmlFor="firstName" className="block text-white">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-white">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <label htmlFor="email" className="block text-white">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <label htmlFor="company" className="block text-white">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-white">
                City or Country
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your city or country"
              />
            </div>
          </div>

          <div>
              <label htmlFor="service" className="block text-white">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="">-- Select a Service --</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

          <div className="gap-8">
            <label htmlFor="message" className="block text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Use the MyInfo component */}
      <MyInfo />
    </div>
  );
}
