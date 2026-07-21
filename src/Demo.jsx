import React from "react";

const Demo = () => {
  return (
    <div className="container">
      <form>
        <h1>User Form</h1>
        <div className="ui form">
          <div className="ui field">
            <label>UserName:</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="ui field">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="ui field">
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Demo;
