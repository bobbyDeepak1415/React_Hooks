import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const [touched, setTouched] = useState({ email: false, password: false });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!emailRegex.test(value)) {
        errorMsg = "email must include @";
      }
    }

    if (name === "password") {
      if (!passwordRegex.test(value)) {
        errorMsg = "password must be atleast 6 characters long";
      }
    }

    setErrors((prev) => {
      return {
        ...prev,
        [name]: errorMsg,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    validate(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !errors.email &&
      !errors.password &&
      formData.email &&
      formData.password
    ) {
      console.log("form successfully submitted", formData);
      alert("submission successful!");
    }

    setFormData({ email: "", password: "" });
    setTouched({ email: false, password: false });
  };

  const isFormInvalid =
    errors.email || errors.password || !formData.password || !formData.email;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          onBlur={handleBlur}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {touched.email && errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          onBlur={handleBlur}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {touched.password && errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button type="submit" disabled={isFormInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
