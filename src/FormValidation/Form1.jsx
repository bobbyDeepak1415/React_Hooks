import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, seterrors] = useState({ email: "", password: "" });

  const [touched,setTouced]=useState({email:false,password:false})


  const validate=(name,value)=>{
    let errorMsg=""

    if(name==="email"){
      if(!value.includes("@")){
        errorMsg="Email must contain an @ symbol"
      }
    }
    
    if(name==="password"){
      if(!value.length>6){
        errorMsg="password must be at least 6 characters long"
      }
    }

    seterrors((prev)=>{
      return {
        ...prev,
        [name]:errorMsg
      }
    })
    

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    validate(name,value)

  };

  return (
    <div>
      <form>
        <label>Email:</label>
        <input onChange={handleChange} name="email" value={formData.email} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <label>Password:</label>
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </form>
    </div>
  );
};

export default Form1;
