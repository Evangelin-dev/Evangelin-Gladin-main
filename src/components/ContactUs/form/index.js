/* eslint-disable no-unused-vars */
"use client";
import CustomButton from '../../custom/CustomButton';
import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMsg";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const ContactUsForm = () => {
  const [loc, setLoc] = useState("");
  const [loader, setLoader] = useState(false);
  const [host, setHost] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);


  const saveContactUs = async (e) => {
    setLoader(true);
    const formData = new FormData(e.target);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/lead-generate/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("contact-us-form").reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        document.getElementById("success-msg-modal-btn").click();
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        document.getElementById("contact-us-form").reset();
        alert("Something went wrong, will keep in touch with you !");
      });
  };

  return (
    <>
      {loader && (
        <div
          id="spinner-div"
          className="pt-5 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-border" role="status" aria-hidden="true" />
        </div>
      )}

      {showSuccess && <SuccessMessage />}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveContactUs(e);
        }}
        id="contact-us-form"
        className="d-flex flex-wrap align-items-start row g-3 p-3"
      >
        <input type="hidden" value={host} name="source" />
        <input type="hidden" value={loc} name="location" />
        <input type="hidden" value="Other" name="interested_in" />
        <input
          type="hidden"
          value={process.env.NEXT_PUBLIC_CLIENT_ID}
          name="access_key"
        />

        <div className="col-12 text-white py-3 fs-2 fw-bold">
          <div>Got questions about our products or want to scale with us?</div>
          <div className="fs-6 fw-normal">
            Take the first step to convert your vision into visibility.
            Reach out to our friendly team — we'll get back to you as soon as possible!
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded px-3 me-1 py-2 text-black"
              id="firstName"
              placeholder="First Name"
              name="first_name"
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded px-3 py-2 text-black me-1"
              id="lastName"
              placeholder="Last Name"
              name="last_name"
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded px-3 py-2 text-black me-1"
              id="workEmail"
              placeholder="Work Email"
              name="email"
              required
            />
            <label htmlFor="workEmail">Work Email</label>
          </div>
        </div>

        <div className="col-md-4 text-black">
          <div className="form-floating mb-3">
            <input type="hidden" value={phoneValue} name="phone" required />
            <PhoneInputWithCountrySelect
              onChange={(e) => setPhoneValue(e)}
              defaultCountry="IN"
              className="form-floating"
              numberInputProps={{
                className: "form-control rounded px-3 py-2 ",
                required: true,
                name: "phone",
                placeholder: "Phone",
              }}
              limitMaxLength={15}
              labels={"Phone Number"}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <textarea
              className="form-control rounded px-3 py-2 text-black me-1"
              placeholder="What tasks would you like to solve?"
              id="note"
              name="note"
              required
            ></textarea>
            <label htmlFor="note">Type your Message here….</label>
          </div>
        </div>

        <div className="mb-3 mt-2 d-flex justify-content-end col-md-12">
          <CustomButton title="Connect With Us" className="w-auto px-4 py-2 rounded transition-all duration-300 hover:scale-105 hover:bg-opacity-90" />
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
