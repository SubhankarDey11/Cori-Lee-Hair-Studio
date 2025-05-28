'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&auto=format&fit=crop&q=60"
          alt="Woman with beautiful hairstyle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">
            Get in Touch with Our Team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+15402879392"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    (540) 287-9392
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Fredericksburg, VA</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">By Appointment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:info@corileehair.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    info@corileehair.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map or Additional Information */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                We're located in the heart of Fredericksburg, VA. Please call or
                email to schedule your appointment.
              </p>
              {/* Add Google Maps embed or custom map component here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 