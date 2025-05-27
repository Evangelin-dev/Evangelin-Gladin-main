import ContactUsForm from "./form";
import style from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={`container text-color-black`} id={`contactUs`}>
      <div className="row g-0 py-2">
        <div className={`col-md-12 col-sm-12 ${style.contact_us_form_p}`}>
          <div className="container">
            <div className="form py-4">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      {/* <PhonePopUp /> */}
    </div>
  );
};

export default ContactUs;
