import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />
    </div>
  );
};

export default Form2;
