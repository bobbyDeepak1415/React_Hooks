import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });


  const handleChange=()=>{
    
  }

  
  return (
    <div>
      <form>
        <label>Email:</label>
        <input onChange={handleChange} name="email" value={formData.email} />
        <label>Password:</label>
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
      </form>
    </div>
  );
};

export default Form1;
