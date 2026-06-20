import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!value.contains("@")) {
        errorMsg = "email must contain @";
      }
    }
    if (name === "password") {
      if (!value.length > 6) {
        errorMsg = "password must be atleast 6 characters long";
      }
    }
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

  return (
    <div>
      <label>Email:</label>
      <input value={formData.email} name="email" onChange={handleChange} />
      {}
    </div>
  );
};

export default Form2;
