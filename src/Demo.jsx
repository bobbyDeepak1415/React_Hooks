import React, { useState } from "react";

const Demo = () => {
  const initialValues = { username: "", password: "", email: "" };

  const [formValues, setFormValues] = useState(initialValues);

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
            />
          </div>
          <div className="ui field">
            <label>Email:</label>
            <input
              value={formValues.email}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="ui field">
            <label>Password:</label>
            <input
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
