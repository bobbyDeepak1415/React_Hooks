import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  return (
    <div>
      <form>
        <label>Email:</label>
        <input value={formData.email}></input>
        <label>Password:</label>
        <input value={formData.password}></input>
      </form>
    </div>
  );
};

export default Form1;
