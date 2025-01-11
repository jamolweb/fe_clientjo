"use client";
import React, { useState } from "react";

const LaptopInputs = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    subject: "",
    message: "",
  });
  const [extraText, setExtraText] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setExtraText(false);
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExtraText(false);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
    if (validate()) {
      console.log("Form Data: ", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setExtraText(true);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Full name *"
              className={`bg-inherit border ${
                errors.email && touched.name
                  ? "border-red-500"
                  : "border-gray-500"
              } focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-black`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm text-left">
                {errors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.tel}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Phone number"
              className={`bg-inherit border ${
                errors.email && touched.name
                  ? "border-red-500"
                  : "border-gray-500"
              } focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-black`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm text-left">
                {errors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email *"
              className={`bg-inherit border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-500"
              } focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-black`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm text-left">
                {errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-inherit border border-gray-500 focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 font-semibold py-4 px-8 rounded-full text-xl transition ease-linear duration-300 w-fit"
        >
          Apply Now
        </button>
      </form>

      {extraText && (
        <h2 className="text-center text-green-500 mt-5">
          Thank you for your message. It has been sent.
        </h2>
      )}
    </div>
  );
};

export default LaptopInputs;
