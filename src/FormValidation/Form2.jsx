import React, { useState } from "react";

const Form2 = () => {

  const [formData,setFormData]=useState({email:"",password:""})

  const handleChange=(e)=>{
const {name,value}=e.target

setFormData((prev)=>{
  return {
    ...prev,
    [name]:value
  }
})

  }


  return <div>

    <form>
      <label>Email:</label>
      <input value={formData.email} onChange={handleChange}/>
    </form>
  </div>;
};

export default Form2;
