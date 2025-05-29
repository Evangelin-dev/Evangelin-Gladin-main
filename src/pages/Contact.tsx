/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const Contact: React.FC = () => {
  return (
    <section className="contact px-4 sm:px-6 md:px-12 max-w-4xl mx-auto" id="contact">
      <h2 className="heading text-center">
        Contact <span>Me!</span>
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
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted:', values);
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-6">
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="input-box w-full sm:w-1/2 ">
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="input-box w-full sm:w-1/2">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="input-box w-full sm:w-1/2">
                <Field
                  name="mobileNumber"
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full p-3 border rounded"
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="input-box w-full sm:w-1/2">
                <Field
                  name="emailSubject"
                  type="text"
                  placeholder="Email Subject"
                  className="w-full p-3 border rounded"
                />
                <ErrorMessage
                  name="emailSubject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            
            <button type="submit" className="btn w-full">
              Send Message
            </button>
          </Form>
        )}
      </Formik>

      
      <div className=" py-6  mx-auto flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
        <a href="#" className=" bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] hover:bg-black w-full rounded-md flex justify-center items-center sm:w-56 h-20 px-6 py-3 text-center">
          Book a strategy session
        </a>
        <a href="#" className="bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] w-full rounded-md flex justify-center items-center sm:w-56  h-20 px-6 py-3 text-center">
          Invite me to speak
        </a>
        <a href="#" className="bg-[linear-gradient(88deg,_#ffa37b_-11.16%,_#fa6bbe_46.95%,_#732bf7_94.89%)] w-full rounded-md flex justify-center items-center sm:w-56  h-20 px-6 py-3 text-center">
          Ask a question
        </a>
      </div>
    </section>
  );
};

export default Contact;
