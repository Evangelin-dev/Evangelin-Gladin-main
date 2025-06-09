/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string()
    .matches(/^\d+$/, 'Must be a number')
    .min(10, 'Must be at least 10 digits')
    .required('Mobile number is required'),
  emailSubject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (
    values: {
      fullName: string;
      email: string;
      mobileNumber: string;
      emailSubject: string;
      message: string;
    },
    { resetForm, setSubmitting }: import('formik').FormikHelpers<{
      fullName: string;
      email: string;
      mobileNumber: string;
      emailSubject: string;
      message: string;
    }>
  ) => {
    setIsSubmitting(true);

    try {

      const nameParts = values.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        location: null,
        interested_in: "Other",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        first_name: firstName,
        last_name: lastName,
        email: values.email,
        phone: `+91${values.mobileNumber}`,
        note: values.message
      };

      console.log('Payload:', payload);

      const response = await fetch(`${process.env.REACT_APP_CONTACT_API}/?access_key=${process.env.REACT_APP_ACCESS_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setShowSuccess(true);
        resetForm();


        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <section className="contact px-4 sm:px-6 md:px-12 max-w-4xl mx-auto" id="contact">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Success!</h2>
          <p className="text-lg text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you soon!</p>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact px-4 sm:px-6 md:px-12 max-w-4xl mx-auto" id="contact">
      <h2 className="heading text-center text-3xl font-bold mb-8">
        Contact <span className="text-blue-600">Me!</span>
      </h2>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          mobileNumber: '',
          emailSubject: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="space-y-6">

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="input-box w-full sm:w-1/2 ">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="input-box w-full sm:w-1/2">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <div className="input-box w-full sm:w-1/2">
                <PhoneInput
                  country={'in'}
                  value={formik.values.mobileNumber}
                  onChange={(phone) => formik.setFieldValue('mobileNumber', phone)}
                  onBlur={formik.handleBlur}
                  inputProps={{
                    name: 'mobileNumber',
                    required: true,
                    className:
                      'w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500',
                  }}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.mobileNumber}</div>
                )}
              </div>

              <div className="input-box w-full sm:w-1/2">
                <input
                  name="emailSubject"
                  type="text"
                  placeholder="Email Subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailSubject}
                  className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="emailSubject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>


            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>


            <button
              type="button"
              onClick={formik.submitForm}
              disabled={isSubmitting}
              className="btn w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        )}
      </Formik>


      <div className="py-6 mx-auto flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
        <a href="#" className="bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] hover:opacity-90 w-full rounded-md flex justify-center items-center sm:w-56 h-20 px-6 py-3 text-center text-white font-medium">
          Book a strategy session
        </a>
        <a href="#" className="bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] hover:opacity-90 w-full rounded-md flex justify-center items-center sm:w-56 h-20 px-6 py-3 text-center text-white font-medium">
          Invite me to speak
        </a>
        <a href="#" className="bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] hover:opacity-90 w-full rounded-md flex justify-center items-center sm:w-56 h-20 px-6 py-3 text-center text-white font-medium">
          Ask a question
        </a>
      </div>
    </section>
  );
};

export default Contact;