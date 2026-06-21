import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState({ email: "", password: "" });

  const [touched, setTouched] = useState({ email: false, password: false });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (emailRegex.test(value)) {
        errorMsg = "the email must contain @";
      }
    }

    if (name === "password") {
      if (passwordRegex.test(value)) {
        errorMsg = "the password must be atleast 6 characters long";
      }
    }

    setError((prev) => {
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

  const handleSubmit = () => {
    if (
      formData.email &&
      formData.password &&
      !error.password &&
      !error.email
    ) {
      console.log("submission successful", formData);
      alert("submission successful");
    }

    setFormData({ email: "", password: "" });
    setTouched({ email: false, password: false });
  };

  const isFormInvalid =
    !formData.email || !formData.password || error.email || error.password;

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
        {touched.email && error.email && (
          <p style={{ color: "red" }}>{error.email}</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          onBlur={handleBlur}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {touched.password && error.password && (
          <p style={{ color: "red" }}>{error.password}</p>
        )}

        <button type="submit" disabled={isFormInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
