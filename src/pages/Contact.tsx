/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    emailSubject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact px-4 sm:px-6 md:px-12 max-w-4xl mx-auto" id="contact">
      <h2 className="heading text-center">
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="input-box flex flex-wrap gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="flex-grow min-w-[45%]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-grow min-w-[45%]"
          />
        </div>

        <div className="input-box flex flex-wrap gap-4">
          <input
            type="number"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="flex-grow min-w-[45%]"
          />
          <input
            type="text"
            name="emailSubject"
            placeholder="Email Subject"
            value={formData.emailSubject}
            onChange={handleChange}
            required
            className="flex-grow min-w-[45%]"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full"
          rows={5}
        ></textarea>

        <input type="submit" value="Send Message" className="btn w-full" />
      </form>
      <div className="book pb-3 max-w-3xl mx-auto flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 sm:justify-center">
        <a href="#" className="btn4 block w-full sm:w-auto px-6 py-3 text-center">
          Book a strategy session
        </a>
        <a href="#" className="btn5 block w-full sm:w-auto px-6 py-3 text-center">
          Invite me to speak
        </a>
        <a href="#" className="btn6 block w-full sm:w-auto px-6 py-3 text-center">
          Ask a question
        </a>
      </div>
    </section>
  );
};

export default Contact;
