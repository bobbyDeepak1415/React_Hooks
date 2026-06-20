import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, seterrors] = useState({ email: "", password: "" });

  const [touched, setTouced] = useState({ email: false, password: false });

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!value.includes("@")) {
        errorMsg = "Email must contain an @ symbol";
      }
    }

    if (name === "password") {
      if (!value.length > 6) {
        errorMsg = "password must be at least 6 characters long";
      }
    }

    seterrors((prev) => {
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

    setTouced((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  };

  const isFormInvalid=errors.email || errors.password || !formData.email || !formData.password


  const handleSubmit=()=>{

  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>Email:</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={formData.email}
        />
        {touched.email && errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
        <label>Password:</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          value={formData.password}
        />
        {touched.password && errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button disabled={isFormInvalid}>Submit</button>
      </form>
    </div>
  );
};

export default Form1;
