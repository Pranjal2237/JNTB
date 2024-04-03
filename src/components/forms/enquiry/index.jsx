import React,{useRef} from "react";
import "./style.css";
import { useFormik } from "formik";
import { EnquirySchema } from "../../../schemas";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  website: "http://",
  address: "",
  message: "",
  product: "",
};

const EnquiryForm = () => {
  const form=useRef();
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: EnquirySchema,
      onSubmit: (values) => {
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_ENQUIRY_TEMPLATE_ID, form.current, {
              publicKey:process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
              () => {
                console.log("SUCCESS!");
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
      },
    });

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} ref={form}>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Name <span>*</span>
        </label>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Email <span>*</span>
        </label>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Phone <span>*</span>
        </label>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Website
        </label>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.website && touched.website ? <p>{errors.website}</p> : null}
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Address <span>*</span>
        </label>
        <div>
          <textarea
            autoComplete="off"
            name="address"
            placeholder="Address here"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? <p>{errors.address}</p> : null}
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Interested Product
        </label>
        <select
          name="product"
          value={values.product}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option>-Select-</option>
          <option>Indian Spices</option>
          <option>Indian Herbs</option>
          <option>Dry Fruits</option>
          <option>Fresh Fruits</option>
          <option>Fresh Vegetables</option>
          <option>Natural Honey</option>
          <option>Handicrafts Products</option>
        </select>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          Message
        </label>
        <div>
          <textarea
            autoComplete="off"
            name="message"
            placeholder="Message here"
            value={values.message}
            onChange={handleChange}
          />
          <p
            style={{
              color: "var(--color-green)",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Please keep it short. There is a space below to attach your Cover
            Letter and Order Copy (Both Covering Letter and Order copy are
            Optional)
          </p>
        </div>
      </div>
      {/* <div className="input-block">
        <label htmlFor="name" className="input-label">
          Cover Letter
        </label>
        <div style={{ width: "100%" }}>
          <input
            type="file"
            autoComplete="off"
            name="name"
            id="name"
            style={{ border: "none", padding: "0" }}
          />
          <p>Formats Accepted: doc, pdf (Optional)</p>
        </div>
      </div>
      <div className="input-block">
        <label htmlFor="name" className="input-label">
          {" "}
          Order Document
        </label>
        <div style={{ width: "100%" }}>
          <input
            type="file"
            autoComplete="off"
            name="name"
            id="name"
            style={{ border: "none", padding: "0" }}
          />
          <p>Formats Accepted: doc, pdf (Optional)</p>
        </div>
      </div> */}
      <button className="btn" type="submit">
        Submit Product Enquiry
      </button>
    </form>
  );
};

export default EnquiryForm;
