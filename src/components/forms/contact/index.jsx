import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { refresh } from "../../../assets";
import { useFormik } from "formik";
import { ContactSchema } from "../../../schemas";
import emailjs from "@emailjs/browser";

function generateCode() {
  let code = "";
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 36);
    if (typeof arr[index] === "string") {
      const check = Math.floor(Math.random() * 2);
      if (check === 0) {
        const char = arr[index].toUpperCase();
        code = code + char;
      } else {
        code = code + arr[index];
      }
    } else {
      code = code + arr[index];
    }
  }
  return code;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [code, setCode] = useState();
  const [codeinput,setCodeInput]=useState(' ');
  const [check, setCheck] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const[action,setAction]=useState('Submit')
  const form = useRef();

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: ContactSchema,
      onSubmit: (values,{resetForm}) => {
        
        if (canSubmit === true) {
          setAction('Submitting...')
          emailjs
            .sendForm('service_fjcmugf','template_kfdqsha', form.current, {
              publicKey: 'COLQvudnCYH01N07-',
            })
            .then(
              () => {
                setAction('Submitted')
                setTimeout(()=>{
                  setAction('Submit')
                },1000)
                setCodeInput(' ');
                resetForm();
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
        }
      },
    });

  const codeHandler = () => {
    const new_code = generateCode();
    setCode(new_code);
  };

  const handleCode = (e) => {
    setCodeInput(e.target.value);
    if (e.target.value !== code) {
      setCanSubmit(false);
      setCheck("Incorrect Captcha");
    } else {
      setCanSubmit(true);
      setCheck(null);
    }
    return e.target.value;
  };

  console.log(codeinput)

  useEffect(() => {
    setCode(generateCode());
  }, []);

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className="contact-form">
        <div className="form-left">
          <div className="input-block">
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="name">
              Email <span>*</span>
            </label>
            <input
              type="text"
              autoComplete="off"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="name">
              Phone/Mobile <span>*</span>
            </label>
            <input
              type="text"
              autoComplete="off"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
          </div>
        </div>
        <div className="form-right">
          <div className="input-block">
            <label htmlFor="name">Message</label>
            <textarea
              autoComplete="off"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-block">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <label htmlFor="name">Security Code*</label>
              <span
                style={{
                  color: "#fff",
                  backgroundColor: "black",
                  padding: "5px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                {code}
              </span>
              <img
                src={refresh}
                alt="refresh"
                style={{ cursor: "pointer" }}
                onClick={codeHandler}
              />
            </div>
            <input
              type="text"
              autoComplete="off"
              name="codeinput"
              value={codeinput}
              onChange={(e) => {
                handleCode(e);
              }}
            />
            <p style={{ color: "red", fontWeight: "500", margin: "5px 0" }}>
              {check && check}
            </p>
          </div>
          <button className="btn" type="submit">
            {action}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
