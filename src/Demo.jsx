import React, { useState } from "react";

const Demo = () => {
  const initialValues = { username: "", password: "", email: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container bg-gray">
      <form>
        <h1>Login Form:</h1>
        <div className="ui form">
          <div className="ui field">
            <label>UserName:</label>
            <input
              value={formValues.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="ui field">
            <label>Email:</label>
            <input
              onChange={handleChange}
              value={formValues.email}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="ui field">
            <label>Password:</label>
            <input
              onChange={handleChange}
              type="password"
              value={formValues.email}
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Demo;
