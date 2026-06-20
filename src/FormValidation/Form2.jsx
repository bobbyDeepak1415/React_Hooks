import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const [touched, setTouched] = useState({ email: false, password: false });

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!value.includes("@")) {
        errorMsg = "email must include @";
      }
    }

    if (name === "password") {
      if (value.length< 6) {
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

  return (
    <div>
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
        onBlur={handleBlur}
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {touched.password && errors.password && (
        <p style={{ color: "red" }}>{errors.password}</p>
      )}
    </div>
  );
};

export default Form2;
